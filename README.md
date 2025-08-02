# ICD-10 Skin Diagnosis Tool

A lightweight, offline-capable web tool for dermatopathology ICD-10 lookup.

## 🌐 Features

- 📦 Offline ICD-10 skin diagnosis database (380+ entries)
- 🔍 Fuzzy search with support for clinical abbreviations (e.g., "AK", "SCC in situ")
- 🔁 Internal alias mapping for clinic-used terms → ICD-10 official names
- 📋 Copy final diagnosis with code for pasting into reports or EMR
- 💻 Runs directly in your browser (no backend, no internet required)

## 🧱 Included Files

- `index.html` – Main web page
- `icd_list.json` – ICD-10 codes & full diagnosis terms (skin-related only)
- `alias_map.json` – Abbreviation → Official diagnosis mapping

## 🚀 How to Use

1. Open `index.html` in your browser
2. Type diagnosis or abbreviation (e.g., `ak`, `pih`, `melanoma`)
3. Click the result to copy ICD-10 code + diagnosis

## 🌍 Optional: Deploy to GitHub Pages

- Go to **Settings → Pages**
- Set source to `main` branch, folder = `/ (root)`
- Access at: `https://yourusername.github.io/icd10-skin-tool/`

## 📦 Version

This is **v1.0** – stable offline tool with customizable data.

---

Made with ❤️ for dermatopathology productivity.
