# Muhammad Abdullah — Academic Website

This repository contains the source for Muhammad Abdullah's academic website, published through GitHub Pages at [muhammadabdullahphd.github.io](https://muhammadabdullahphd.github.io/).

## Preview locally

Open `index.html` directly in a browser, or serve the folder with any static web server. For example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Current pages

- `index.html` — homepage
- `research.html` — doctoral, experimental, clinical and earlier energy research
- `publications.html` — filterable research-output list
- `data-methods.html` — dataset, methods, systems and training
- `cv.html` — CV availability page; no CV document is currently published
- `about.html` — biography, contact and scholarly profiles

## Current status

- Six research-image panels use three original, accessible SVG schematics; each is labelled as conceptual.
- The CV download is intentionally disabled until a public-safe PDF is created.
- The LinkedIn URL remains to be added.

## Planned updates

1. Add the LinkedIn URL after the profile is updated.
2. Create and link a public-safe CV without application-specific details.

## Research illustrations

The three hand-authored SVG files in `assets/research/` share the site's navy, blue and teal palette. They are original conceptual drawings, not reproduced publication figures, experimental data, fitted anatomy or simulation outputs. Each includes an SVG title and description; page figures supply alt text and a visible conceptual caption. No external fonts, scripts or image dependencies are required.

- `pelvis-geometry.svg`: anatomical variation and pelvis geometry as inputs to gait simulation. Solid and dashed outlines are illustrative alternatives, not male/female templates, statistical shape modes, effect sizes or a completed SSM result. Public context: [website research description](research.html#doctoral) and [IEEE Access study](https://doi.org/10.1109/ACCESS.2026.3728015).
- `flexible-thorax.svg`: lateral bending with mass and disc stiffness as model inputs. Rib and vertebral shapes are simplified; no exact joint model or loading result is implied. Public context: [website modeling description](research.html#modeling) and [Scientific Reports study](https://doi.org/10.1038/s41598-026-61797-9). The journal full texts were not accessible during illustration preparation, so these drawings use only the public website descriptions and publication titles.
- `multimodal-gait.svg`: representative EEG, EMG and IMU instrumentation above a split-belt force treadmill, based on the [PhysioNet dataset methods](https://physionet.org/content/multimodal-gait-dataset/1.0.0/). Sensor positions are symbolic, not an electrode-placement guide. EEG/EMG/IMU used a trigger protocol; treadmill force acquisition was manually initiated near-synchronously. The diagram deliberately shows no common hardware synchronization bus or invented signal traces.

These illustrations may be edited alongside the site source. Do not relabel them as measured anatomy or published results.
