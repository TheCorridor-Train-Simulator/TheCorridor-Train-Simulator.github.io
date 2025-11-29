# WebP conversion script using ImageMagick or ffmpeg
$img1 = "src\assets\images\IMG_0046-Enhanced-NR.jpg"
$img2 = "src\assets\images\IMG_3005.jpg"
$out1 = "src\assets\images\IMG_0046-Enhanced-NR.webp"
$out2 = "src\assets\images\IMG_3005.webp"

Write-Host "Converting images to WebP format..." -ForegroundColor Cyan

# Check if ImageMagick is installed
$magickCmd = Get-Command magick -ErrorAction SilentlyContinue
$ffmpegCmd = Get-Command ffmpeg -ErrorAction SilentlyContinue

if ($magickCmd) {
    Write-Host "`nUsing ImageMagick..." -ForegroundColor Green
    
    # Convert first image
    Write-Host "Converting IMG_0046-Enhanced-NR.jpg..."
    magick convert "$img1" -quality 85 "$out1"
    
    # Convert second image
    Write-Host "Converting IMG_3005.jpg..."
    magick convert "$img2" -quality 85 "$out2"
    
} elseif ($ffmpegCmd) {
    Write-Host "`nUsing FFmpeg..." -ForegroundColor Green
    
    # Convert first image
    Write-Host "Converting IMG_0046-Enhanced-NR.jpg..."
    ffmpeg -i "$img1" -c:v libwebp -quality 85 -y "$out1"
    
    # Convert second image
    Write-Host "Converting IMG_3005.jpg..."
    ffmpeg -i "$img2" -c:v libwebp -quality 85 -y "$out2"
    
} else {
    Write-Host "`nNeither ImageMagick nor FFmpeg found. Installing via npm package..." -ForegroundColor Yellow
    Write-Host "Will use imagemin packages instead.`n"
    exit 1
}

# Show results
if (Test-Path $out1) {
    $origSize1 = (Get-Item $img1).Length / 1MB
    $newSize1 = (Get-Item $out1).Length / 1MB
    $savings1 = (($origSize1 - $newSize1) / $origSize1) * 100
    Write-Host "`n✓ IMG_0046-Enhanced-NR.jpg: $([math]::Round($origSize1, 2)) MB → $([math]::Round($newSize1, 2)) MB (saved $([math]::Round($savings1, 1))%)" -ForegroundColor Green
}

if (Test-Path $out2) {
    $origSize2 = (Get-Item $img2).Length / 1MB
    $newSize2 = (Get-Item $out2).Length / 1MB
    $savings2 = (($origSize2 - $newSize2) / $origSize2) * 100
    Write-Host "✓ IMG_3005.jpg: $([math]::Round($origSize2, 2)) MB → $([math]::Round($newSize2, 2)) MB (saved $([math]::Round($savings2, 1))%)" -ForegroundColor Green
}

Write-Host "`nConversion complete!" -ForegroundColor Cyan
