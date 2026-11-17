
# Vuesp Saihang BMS

Anenji 12.8V 100AH LiFePO4 Battery

## Документация

Подробное описание платы, распиновка, схема, ScriptRunner и ограничения — в [DOCS.md](./DOCS.md).

## Особенности

- UART 9600 8N1: RX GPIO5, TX GPIO6.
- Четыре ячейки, четыре NTC, ток, напряжение, ёмкость и SOC.
- ASCII-HEX кадры `~ … \r`, команды B0, 31E0 и 33E0.


[BmsTool V1.0.18.zip](./github/BmsTool%20V1.0.18.zip) - BmsTool

![foto](./github/foto.webp)
![foto2](./github/foto2.webp)

## 📚 Short BMS Protocol Documentation (Saihang)

## 1. General Information

| Parameter | Value |
| :--- | :--- |
| **Manufacturer** | Saihang Technology |
| **Interface** | RS232 |
| **Baud Rate** | 9600 |
| **Frame Start** | `~` (0x7E) |
| **Frame End** | `\r` (0x0D) |
| **Format** | ASCII-HEX |

---

## 2. Commands

| Command | Purpose | Example |
| :--- | :--- | :--- |
| **`11`** | Model | `~120146110000FDB0` |
| **`B0`** | Version | `~120146B00000FDA0` |
| **`B1`** | Serial Number | `~120146B10000FD9F` |
| **`31E0`** | Main Data (AnalogPack) | `~12014631E00201FD36` |
| **`33E0`** | Statuses (WarningPack) | `~12014633E00201FD34` |

---

## [Vuesp](https://github.com/bondrogeen/vuesp)

## Version History

### 4.0.0 (2026-11-08)

- V4.0 device UI with the shared glass theme and light/dark modes.
- Updated web dependencies and regenerated screenshots.
- Release workflow publishes `esp32-c3-devkitm-1` firmware and LittleFS images.

## License

The MIT License (MIT)

Copyright (c) 2021-2025, bondrogeen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
