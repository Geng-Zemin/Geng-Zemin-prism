# RsMatchPro

RsMatchPro 是一款面向遥感影像匹配结果可视化与处理的 Windows 软件，当前说明文档对应版本为 V2.0.0。

![RsMatchPro 主界面](/software/rs-match-pro-overview.png)

*主界面：工程文件、影像图层、显示区域与处理状态。*

## 主要功能

- 影像与矢量显示，支持原始影像、参考影像、DEM 和工程文件。
- 连接点匹配、控制点匹配、激光定点匹配和辅助刺点。
- 几何质检与区域网平差，并支持查看相关报告。
- RPC/RPB 转换、投影转换、WGS84 坐标系转换和匹配结果格式转换。
- TIFF 转 SHP、影像分块、缩略图生成、相位图转强度图、图像降位、构建金字塔、波段分离、影像裁切和影像镶嵌。
- 匹配数据集构建、TIFF 数据检查、影像平移和连接点保留率评估。

RsMatchPro 目前支持 Windows，面向遥感影像匹配、质量控制与几何处理等实际工作流程。

## 典型工作流程

1. 新建或打开 `.Pro` 工程，加载原始影像、参考影像、矢量数据或 DEM。
2. 设置匹配参数，执行连接点、控制点、激光定点或辅助刺点匹配。
3. 查看匹配结果、几何质检结果和平差报告。
4. 导出匹配点，或继续进行格式转换、正射纠正、影像镶嵌等处理。

## 部分界面截图

### 处理状态

![RsMatchPro 处理状态](/software/rs-match-pro-status.png)

状态区域记录近期处理命令，并支持查看详细输出信息。

### 连接点匹配

![RsMatchPro 连接点匹配](/software/rs-match-pro-matching.png)

匹配界面展示影像叠加结果和提取的连接点，便于检查匹配效果。

### 控制点匹配

![RsMatchPro 控制点匹配](/software/rs-match-pro-control-points.png)

控制点匹配支持同时查看原始影像与对应 DOM 影像。

## 运行环境

RsMatchPro 目前支持 Windows，依赖 GDAL、OpenCvSharp 等运行库，面向遥感影像匹配、质量控制与几何处理等实际工作流程。
