融數基地一般作品圖表的用色參考。

## 主要五色
```color-palette
colors:
  - {name: "綠色", value: "#0B967D"}
  - {name: "藍色", value: "#1F85AD"}
  - {name: "橘色", value: "#CC6525"}
  - {name: "黃色", value: "#DBAD29"}
  - {name: "粉紅色", value: "#F25E86"}
```
使用時機：
- 當圖表只需映射一種變數時（EX：單變數折線圖、單變數散佈圖、單變數長條圖）。
- 當圖表需要映射多種變數，但各變數的視覺元素周圍**有足夠背景色**時（EX：多變數折線圖、多變數散佈圖）。
```image
plain: true
src: "color-guideline/單色使用範例.png"
```
- 重點強調
```image
plain: true
src: "color-guideline/強調色範例.png"
```

## 類別五色
```color-palette
colors:
  - {value: "#0b967d"}
  - {value: "#acd5c9"}
  - {value: "#89b4cd"}
  - {value: "#f0cd84"}
  - {value: "#dc8350"}
```

使用時機：
- 當圖表需要映射多種變數，但各視覺元素周邊**沒有足夠背景色**或是**相鄰很近**時（EX: 分組長條圖、面積堆疊圖、堆疊長條圖）。
```image
plain: true
src: "color-guideline/多色使用範例.png"
```

## 主色漸層色
```color-palette|span-1
colors:
  - {value: "#0b967d"}
  - {value: "#55ab96"}
  - {value: "#82c0af"}
  - {value: "#acd5c9"}
  - {value: "#d6eae4"}
```
```color-palette|span-1
colors:
  - {value: "#1f85ad"}
  - {value: "#5d9cbd"}
  - {value: "#89b4cd"}
  - {value: "#b1cdde"}
  - {value: "#d8e6ee"}
```
```color-palette|span-1
colors:
  - {value: "#cc6525"}
  - {value: "#dc8350"}
  - {value: "#e9a27a"}
  - {value: "#f4c0a5"}
  - {value: "#fbdfd1"}
```
```color-palette|span-1
colors:
  - {value: "#dbad29"}
  - {value: "#e6bd5a"}
  - {value: "#f0cd84"}
  - {value: "#f7ddac"}
  - {value: "#fceed5"}
```
```color-palette|span-1
colors:
  - {value: "#f25e86"}
  - {value: "#f9829d"}
  - {value: "#fea2b4"}
  - {value: "#ffc2cd"}
  - {value: "#ffe1e6"}
```
```color-palette|span-1
colors:
  - {value: "#24201f"}
  - {value: "#4e4948"}
  - {value: "#7b7675"}
  - {value: "#aca7a6"}
  - {value: "#e0dbd9"}
```

使用時機：
- 當覺得主色互相組合起來過於強烈，需要更溫和一點的顏色轉換搭配時。