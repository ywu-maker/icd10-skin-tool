# ICD-10 Skin Pathology Lookup Tool

A lightweight, offline-capable ICD-10 code search tool designed for dermatopathology usage.  
Built to improve diagnosis-to-code efficiency using fuzzy search, abbreviation expansion, and location mapping.

## 🔧 Features

- 🔍 Fuzzy search with abbreviation & location support
- 🧠 Built-in mappings for common dermatopathology terms
- 🔠 Title-cased diagnosis formatting (e.g., `ak` → `Actinic Keratosis`)
- ⌨️ Press `Enter` to auto-copy diagnosis or ICD code
- 📋 One-click buttons to copy either value
- 📎 Works completely offline

## 🗂 Files

| File | Purpose |
|------|---------|
| `index_icd_skin_v1.1.2.html` | Main HTML web app |
| `alias_map_skinpathology.json` | Abbreviation to diagnosis name mapping |
| `location_map_skinpathology.json` | Location synonyms (e.g., `face` → `cheek`) |
| `icd10_skin_shortlist.json` | Core data (diagnosis name + ICD-10 code) |

## 🚀 How to Use

1. Upload all files to a GitHub repository
2. Rename `index_icd_skin_v1.1.2.html` to `index.html` if deploying via GitHub Pages
3. Enable GitHub Pages in the repository settings
4. Access the tool at: `https://yourusername.github.io/your-repo-name/`

> This version: **v1.1.2**  
> Developed with ❤️ for dermatopathology workflow optimization.