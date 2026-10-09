# RsMatchPro

RsMatchPro is a Windows desktop application for visualizing and processing the results of remote sensing image matching. The current documented version is V2.0.0.

![RsMatchPro overview](/software/rs-match-pro-overview.png)

*Main interface: project files, image layers, display area, and processing status.*

## Main capabilities

- Image and vector display, with support for original imagery, reference imagery, DEMs, and project files.
- Tie-point matching, control-point matching, laser-point matching, and assisted point measurement.
- Geometric quality inspection and network adjustment with report viewing.
- RPC/RPB conversion, projection conversion, WGS84 conversion, and matching-result format conversion.
- TIFF to SHP conversion, image tiling, thumbnail generation, phase-to-intensity conversion, bit-depth conversion, pyramid construction, band separation, cropping, and mosaicking.
- Matching dataset construction, TIFF validation, image translation, and matching-point retention-rate evaluation.

RsMatchPro currently supports Windows. It is intended to support practical workflows for remote sensing image matching, quality control, and geometric processing.

## Typical workflow

1. Create or open a `.Pro` project and load original imagery, reference imagery, vector data, or DEM data.
2. Configure matching parameters and run tie-point, control-point, laser-point, or assisted point matching.
3. Inspect the matching output, geometric quality, and adjustment reports.
4. Export matching points or continue with conversion, orthorectification, mosaicking, and other image-processing tools.

## Selected interface views

### Processing status

![RsMatchPro status](/software/rs-match-pro-status.png)

The status area records recent processing commands and provides access to detailed output information.

### Tie-point matching

![RsMatchPro matching](/software/rs-match-pro-matching.png)

The matching view displays image overlays and extracted tie points for visual inspection.

### Control-point matching

![RsMatchPro control-point matching](/software/rs-match-pro-control-points.png)

Control-point matching supports joint inspection of the original image and the corresponding DOM image.

## Compatibility

RsMatchPro currently supports Windows. It relies on GDAL, OpenCvSharp, and related runtime libraries, and is intended for practical workflows in remote sensing image matching, quality control, and geometric processing.
