#!/bin/bash

# Demo Video Creation Script for PsychoNauka
# Creates a demo video with title cards and viewport-specific footage

cd "$(dirname "$0")/.."

FFMPEG_PATH=$(which ffmpeg)
OUTPUT_DIR="demo-video"

# Create title cards using ffmpeg
create_title() {
    local text="$1"
    local output="$2"
    local duration="${3:-3}"
    local bg_color="${4:-#6366f1}"

    $FFMPEG_PATH -y -f lavfi -i "color=c=${bg_color}:s=1920x1080:d=${duration}" \
        -vf "drawtext=text='${text}':fontsize=72:fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2:font=Arial" \
        -c:v libx264 -pix_fmt yuv420p "$output" 2>/dev/null
}

# Create intro title
echo "Creating intro title..."
create_title "PsychoNauka" "$OUTPUT_DIR/01-intro.mp4" 4 "#6366f1"

# Create viewport titles and convert screenshots to video
echo "Creating Desktop section..."
create_title "Desktop View\\n1920x1080" "$OUTPUT_DIR/02-desktop-title.mp4" 2 "#8b5cf6"

# Create slideshow from Desktop screenshots
$FFMPEG_PATH -y -framerate 1/2 -pattern_type glob -i 'screenshots/Desktop/flow-*.png' \
    -c:v libx264 -pix_fmt yuv420p -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=white" \
    "$OUTPUT_DIR/03-desktop-slides.mp4" 2>/dev/null

echo "Creating Tablet section..."
create_title "Tablet View\\n1024x1366" "$OUTPUT_DIR/04-tablet-title.mp4" 2 "#a855f7"

$FFMPEG_PATH -y -framerate 1/2 -pattern_type glob -i 'screenshots/Tablet/flow-*.png' \
    -c:v libx264 -pix_fmt yuv420p -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=white" \
    "$OUTPUT_DIR/05-tablet-slides.mp4" 2>/dev/null

echo "Creating Mobile section..."
create_title "Mobile View\\n393x852" "$OUTPUT_DIR/06-mobile-title.mp4" 2 "#d946ef"

$FFMPEG_PATH -y -framerate 1/2 -pattern_type glob -i 'screenshots/Mobile/flow-*.png' \
    -c:v libx264 -pix_fmt yuv420p -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=white" \
    "$OUTPUT_DIR/07-mobile-slides.mp4" 2>/dev/null

# Create outro
echo "Creating outro..."
create_title "PsychoNauka\\nnauka.cyberpsychologia.pl" "$OUTPUT_DIR/08-outro.mp4" 3 "#6366f1"

# Create concat file
echo "Creating final video..."
cat > "$OUTPUT_DIR/concat.txt" << EOF
file '01-intro.mp4'
file '02-desktop-title.mp4'
file '03-desktop-slides.mp4'
file '04-tablet-title.mp4'
file '05-tablet-slides.mp4'
file '06-mobile-title.mp4'
file '07-mobile-slides.mp4'
file '08-outro.mp4'
EOF

# Concatenate all videos
$FFMPEG_PATH -y -f concat -safe 0 -i "$OUTPUT_DIR/concat.txt" \
    -c:v libx264 -pix_fmt yuv420p "$OUTPUT_DIR/psychunauka-demo.mp4" 2>/dev/null

echo "Demo video created: $OUTPUT_DIR/psychunauka-demo.mp4"

# Clean up intermediate files
rm -f "$OUTPUT_DIR/0[1-8]-*.mp4" "$OUTPUT_DIR/concat.txt"

echo "Done!"
