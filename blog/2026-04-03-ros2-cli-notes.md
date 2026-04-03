---
slug: ros2-cli-notes
title: 我平时最常用的 ROS 2 指令，先记这些就够用了
authors: [longwaybai]
tags: [ros2, robotics, cli]
---

刚接触 ROS 2 的时候，我最容易乱掉的不是概念，而是命令入口太多：`topic`、`node`、`service`、`launch`、`bag`，每个看起来都像要单独背一套。

后来用久了发现，真正每天会反复敲的其实没那么多。先把这些命令用顺，排查、联调、录包基本就能转起来了。

<!-- truncate -->

这篇不准备写成“官方手册摘要”，更像一份我自己会回来看的一页笔记：

- 新开一个终端，先做什么
- 节点没起来，先查什么
- topic 在不在，怎么快速确认
- 临时发消息、调参数、录 bag 时我一般怎么敲

## 先别急着跑节点，先把环境接上

ROS 2 最经典的问题不是命令不会，而是当前终端根本没 source 对。

系统环境先来一遍：

```bash
source /opt/ros/humble/setup.bash
```

如果你在自己的工作区里编过包，再补一遍本地环境：

```bash
source install/setup.bash
```

我自己的习惯是：只要换了新终端，就默认怀疑自己还没 `source install/setup.bash`。

工作区构建常用这条：

```bash
colcon build --symlink-install
```

如果只是改了一个包，通常会缩小范围：

```bash
colcon build --packages-select my_pkg --symlink-install
```

`--symlink-install` 对写 Python 包和调配置挺省时间，改完不用总怀疑是不是安装产物没更新。

## 想先把东西跑起来：`run` 和 `launch`

单节点验证时，我一般先用 `ros2 run`，它最直接：

```bash
ros2 run turtlesim turtlesim_node
```

如果你忘了某个包里到底暴露了哪些可执行文件，可以先看：

```bash
ros2 pkg executables turtlesim
```

一旦涉及多个节点、参数、remap 或者仿真环境，我会直接切到 `launch`：

```bash
ros2 launch demo_nodes_cpp talker_listener.launch.py
```

我的经验是，如果你已经开始手动开第三个终端去拼命令了，那这件事大概率该写进 launch 了。

## 节点起来没有，先看图谱是不是活着

排查时我最常跑的一组命令其实很固定。

先看节点：

```bash
ros2 node list
ros2 node info /turtlesim
```

`node list` 用来确认“它到底在不在”，`node info` 用来确认“它到底连了谁”。很多时候问题不是节点没起，而是它订阅和发布的话题跟你想的不一样。

再看 topic：

```bash
ros2 topic list
ros2 topic info /cmd_vel
ros2 topic echo /cmd_vel
ros2 topic hz /camera/image_raw
```

我一般是这样用：

- `topic list` 看全局有没有这个话题
- `topic info` 看类型、publisher/subscriber 数量
- `topic echo` 看数据有没有真的在流
- `topic hz` 看频率稳不稳

如果只记一个排查路径，我会记：`list -> info -> echo`。这三步能挡掉很多“我以为数据已经发出来了”的错觉。

## 不确定消息结构时，先别瞎写，先看接口

很多命令卡住，不是 ROS 2 难，是消息字段名记错了。

这时候我会先查接口：

```bash
ros2 interface show geometry_msgs/msg/Twist
```

看完再去发消息，会少掉很多 YAML 手抖。

比如给 `/cmd_vel` 发一条速度：

```bash
ros2 topic pub -1 /cmd_vel geometry_msgs/msg/Twist "{linear: {x: 0.2}, angular: {z: 0.3}}"
```

这里的 `-1` 很适合临时验证，只发一次，不会在终端里一直刷。

如果 shell 一直报格式错，先别怀疑节点，先怀疑自己引号和大括号写歪了。

## service 和 param，适合做那种“现在给我改一下”的操作

service 我通常用来做一次性的触发动作，像创建、重置、切换状态这种：

```bash
ros2 service list
ros2 service type /spawn
ros2 service call /spawn turtlesim/srv/Spawn "{x: 2.0, y: 2.0, theta: 0.0, name: 'turtle2'}"
```

先 `list`，再 `type`，最后 `call`，这样不容易把服务类型猜错。

param 更像在线拧旋钮，调试时特别顺手：

```bash
ros2 param list /my_node
ros2 param get /my_node use_sim_time
ros2 param set /my_node use_sim_time true
```

如果你在仿真或者 bag 回放里跟时间有关的逻辑总觉得不对，`use_sim_time` 值得第一时间看一眼。

## bag 真的很好用，尤其是复现问题的时候

当问题不是每次都稳定出现时，我会尽量早点录包，而不是等问题更复杂再回头补。

```bash
ros2 bag record -a -o run_01
```

`-a` 是先全录，适合还没判断出问题范围的时候。等你知道哪些 topic 真正重要了，再收窄范围也不迟。

回放也很常用：

```bash
ros2 bag play run_01
```

它的价值不只是“回看数据”，更重要的是把一次偶发问题变成可重复输入。

## 两条经常救命的小命令

第一条是健康检查：

```bash
ros2 doctor
```

当你怀疑环境、依赖、网络发现有点不对劲时，先跑它，比原地猜快一些。

第二条是重置 daemon：

```bash
ros2 daemon stop
```

尤其是你切过 DDS / RMW 实现，或者明明节点在跑但 CLI 看起来像失忆了一样，这条有时候很顶用。

## 我自己常用的一套最小顺序

如果今天只是想把一个 ROS 2 工程拉起来并确认通信正常，我通常按这个顺序走：

1. `source /opt/ros/humble/setup.bash`
2. `source install/setup.bash`
3. `ros2 launch ...` 或 `ros2 run ...`
4. `ros2 node list`
5. `ros2 topic list`
6. `ros2 topic echo ...`
7. 需要手动验证时再加 `topic pub` / `service call` / `param set`
8. 问题不稳定就直接 `ros2 bag record`

这样做的好处是，不会一上来就陷进某个节点内部，而是先确认整个图谱是不是按预期活着。

后面如果我继续整理 ROS 2 笔记，大概率会再拆几篇，比如参数文件、launch 组织方式、bag 回放配合仿真时间这些。CLI 先记住这批，已经够覆盖大多数日常场景了。
