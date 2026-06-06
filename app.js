const UNITS = [
  {
    id: "multiplication",
    order: 1,
    title: "かけ算",
    subtitle: "かけ算のきまりを見つけよう",
    category: "数と計算",
    keywords: ["同じ数ずつ", "いくつ分", "1つ分", "ぜんぶの数", "たし算", "かける数", "かけられる数", "きまり"],
    levels: [
      "かけ算は、どんな場面で使う計算ですか。たし算とのちがいも入れて説明しましょう。",
      "かけ算で表せる場面を1つ作り、式の数がそれぞれ何を表すか説明しましょう。",
      "かける数が1ふえると答えはどう変わりますか。式や表を使って説明しましょう。",
      "友だちが「0をかけても少しは残る」と考えています。0のかけ算の意味を説明しましょう。"
    ]
  },
  {
    id: "division",
    order: 2,
    title: "わり算",
    subtitle: "新しい計算のしかたを考えよう",
    category: "数と計算",
    keywords: ["同じ数ずつ分ける", "1人分", "何人分", "何こずつ", "わられる数", "わる数", "答え", "九九", "かけ算とのつながり"],
    levels: [
      "わり算は、どんなときに使う計算ですか。分け方のちがいをくらべて説明しましょう。",
      "わり算を使う場面を1つ作り、式の数がそれぞれ何を表すか説明しましょう。",
      "わり算の答えを九九で見つけられるのはなぜですか。かけ算とのつながりを説明しましょう。",
      "友だちが「わり算はいつも数を小さくする計算」と言っています。どんな説明をしますか。"
    ]
  },
  {
    id: "time",
    order: 3,
    title: "時間の計算と短い時間",
    subtitle: "時こくや時間のもとめ方を考えよう",
    category: "測定",
    keywords: ["時こく", "時間", "始まり", "終わり", "間の長さ", "秒", "分", "数直線", "時計"],
    levels: [
      "「時こく」と「時間」は何がちがいますか。例を使って説明しましょう。",
      "時間の計算が必要になる場面を1つ作り、始まりと終わりを使って説明しましょう。",
      "時間を求めるとき、時計や数直線を使うと何が分かりやすくなりますか。",
      "友だちが「9時50分から10時10分までは60分」と考えています。どう直して説明しますか。"
    ]
  },
  {
    id: "addition-subtraction",
    order: 4,
    title: "たし算とひき算",
    subtitle: "筆算のしかたを考えよう",
    category: "数と計算",
    keywords: ["一の位", "十の位", "百の位", "位をそろえる", "くり上がり", "くり下がり", "筆算", "暗算", "だいたいの数"],
    levels: [
      "筆算では、なぜ位をそろえて計算するのですか。自分の言葉で説明しましょう。",
      "たし算やひき算の筆算が役に立つ場面を1つ作り、どの位を見ているか説明しましょう。",
      "くり上がりやくり下がりは、位のしくみとどうつながっていますか。",
      "友だちが位をそろえずに筆算しています。どこが困るのか説明しましょう。"
    ]
  },
  {
    id: "bar-graph",
    order: 5,
    title: "ぼうグラフ",
    subtitle: "調べたことをグラフや表に整理しよう",
    category: "データの活用",
    keywords: ["表", "ぼうグラフ", "1目盛り", "ぼうの高さ", "合計", "差", "いちばん多い", "いちばん少ない", "読みとる"],
    levels: [
      "ぼうグラフにすると、表だけを見るときより何が分かりやすくなりますか。",
      "調べたいことを1つ考え、表とぼうグラフのどこを見るか説明しましょう。",
      "目盛りの大きさを決めるとき、どんなことに気をつけるとよいですか。",
      "友だちが、ぼうの高さだけ見て考えています。目盛りを見る大切さを説明しましょう。"
    ]
  },
  {
    id: "division-remainder",
    order: 6,
    title: "あまりのあるわり算",
    subtitle: "あまりのあるわり算のしかたを考えよう",
    category: "数と計算",
    keywords: ["あまり", "わる数", "答え", "たしかめ", "場面", "あまりをどうするか", "わる数より小さい"],
    levels: [
      "あまりとは、どんな数のことですか。わり算の場面とつなげて説明しましょう。",
      "あまりのあるわり算になる場面を1つ作り、あまりが何を表すか説明しましょう。",
      "あまりがわる数より小さくなるのはなぜですか。図や言葉で説明しましょう。",
      "答えを「商だけ」にしてよい場面と、あまりを考え直す場面のちがいを説明しましょう。"
    ]
  },
  {
    id: "large-numbers",
    order: 7,
    title: "大きい数",
    subtitle: "10000より大きい数を表そう",
    category: "数と計算",
    keywords: ["一万", "十万", "百万", "位のしくみ", "まとまり", "数の大きさ", "10倍", "100倍", "10でわる"],
    levels: [
      "大きい数を読むとき、位を使うと分かりやすいのはなぜですか。",
      "10000より大きい数の例を1つ見つけ、位ごとにどんなまとまりがあるか説明しましょう。",
      "10倍、100倍、1000倍すると、数の見え方はどう変わりますか。位とつなげて説明しましょう。",
      "友だちが0の数だけで大きさを決めようとしています。位を見る大切さを説明しましょう。"
    ]
  },
  {
    id: "length",
    order: 8,
    title: "長さ",
    subtitle: "長い長さを表そう",
    category: "測定",
    keywords: ["m", "km", "cm", "道のり", "きょり", "通った長さ", "まっすぐ", "単位を選ぶ", "はかる"],
    levels: [
      "長い長さを表すとき、なぜkmという単位を使うことがありますか。",
      "mで表す方がよい長さと、kmで表す方がよい長さを1つずつ考え、理由を説明しましょう。",
      "道のりときょりは何がちがいますか。図に表すつもりで説明しましょう。",
      "友だちが何でもcmで表そうとしています。単位を選ぶよさを説明しましょう。"
    ]
  },
  {
    id: "circle-sphere",
    order: 9,
    title: "円と球",
    subtitle: "まるい形を調べよう",
    category: "図形",
    keywords: ["円", "球", "中心", "半径", "直径", "コンパス", "同じ長さ", "どこも同じ長さ", "まるい形"],
    levels: [
      "円はどんな形ですか。中心や半径という言葉を使って説明しましょう。",
      "身の回りにある円や球を1つ見つけ、中心や半径とつなげて説明しましょう。",
      "コンパスで円をかけるのは、円のどんな性質を使っているからですか。",
      "友だちが「円と球は同じ」と言っています。似ているところとちがうところを説明しましょう。"
    ]
  },
  {
    id: "vertical-multiplication-1",
    order: 10,
    title: "かけ算の筆算（1）",
    subtitle: "かけ算のしかたをくふうしよう",
    category: "数と計算",
    keywords: ["何十", "何百", "2けた", "3けた", "位ごと", "分けて考える", "分けてかける", "たす", "筆算"],
    levels: [
      "かけ算の筆算では、大きい数をどのように分けて考えていますか。",
      "2けたや3けたの数にかける場面を1つ作り、分けて考えるところを説明しましょう。",
      "筆算の途中の答えは、それぞれ何を計算しているものですか。位とつなげて説明しましょう。",
      "友だちが筆算の0を気にせず書いています。位を意識する大切さを説明しましょう。"
    ]
  },
  {
    id: "decimal",
    order: 11,
    title: "小数",
    subtitle: "1より小さい数を表そう",
    category: "数と計算",
    keywords: ["小数", "小数点", "整数", "小数第一位", "0.1", "0.1のいくつ分", "数直線", "はした", "たし算"],
    levels: [
      "小数は、どんな大きさを表すための数ですか。整数とのちがいも入れて説明しましょう。",
      "小数が使われている場面を1つ見つけ、1より小さい部分をどう表しているか説明しましょう。",
      "0.1をもとにすると、小数の大きさや計算をどう考えられますか。",
      "友だちが「0.8は0.12より小さい。8より12が大きいから」と言っています。どう説明しますか。"
    ]
  },
  {
    id: "weight",
    order: 12,
    title: "重さ",
    subtitle: "ものの重さをはかろう",
    category: "測定",
    keywords: ["g", "kg", "t", "はかり", "同じ単位", "単位を選ぶ", "だいたいの重さ", "くらべる", "長さ・かさ・重さ"],
    levels: [
      "重さをくらべたり表したりするとき、単位を使うとよいのはなぜですか。",
      "身の回りのものを1つ選び、g、kg、tのどれで表すとよいか理由を説明しましょう。",
      "長さ、かさ、重さの単位には、どんな似ているところがありますか。",
      "友だちが重いものも軽いものも全部gで表そうとしています。単位を選ぶよさを説明しましょう。"
    ]
  },
  {
    id: "fraction",
    order: 13,
    title: "分数",
    subtitle: "分数の表し方を調べよう",
    category: "数と計算",
    keywords: ["分数", "分母", "分子", "同じ大きさに分ける", "1をもとにする", "いくつ分", "数直線", "同じ分母"],
    levels: [
      "分数は、どんな大きさを表すための数ですか。1をもとにして説明しましょう。",
      "分数で表せる長さやかさの場面を1つ作り、1をどのように分けたか説明しましょう。",
      "同じ分母の分数をたしたりひいたりするとき、なぜ分子に注目できるのですか。",
      "友だちが「分母が大きいほど分数は大きい」と考えています。どう説明しますか。"
    ]
  },
  {
    id: "unknown-box",
    order: 14,
    title: "□を使った式",
    subtitle: "□を使った式で表そう",
    category: "数量関係",
    keywords: ["□", "わからない数", "数のつながり", "式", "図", "あてはめる", "もとにもどす", "逆の計算", "たし算"],
    levels: [
      "□を使うと、どんなよさがありますか。わからない数とつなげて説明しましょう。",
      "□を使って表せる場面を1つ作り、□が何を表しているか説明しましょう。",
      "図と□を使った式をつなげると、数のつながりがどう見えやすくなりますか。",
      "友だちが□をただの空らんだと思っています。□が表している意味を説明しましょう。"
    ]
  },
  {
    id: "multiplicative-comparison",
    order: 15,
    title: "倍の見方",
    subtitle: "倍の計算を考えよう",
    category: "数量関係",
    keywords: ["ばい", "もとにする大きさ", "くらべる大きさ", "差", "テープ図", "何ばい", "□", "かけ算", "わり算"],
    levels: [
      "「何倍」とは、どんな見方ですか。もとにする大きさを使って説明しましょう。",
      "身の回りで「何倍」と言える場面を1つ作り、何をもとにしたか説明しましょう。",
      "テープ図を使うと、倍の関係がどう分かりやすくなりますか。",
      "友だちが「差が同じなら倍も同じ」と考えています。例を使って説明しましょう。"
    ]
  },
  {
    id: "triangles-angles",
    order: 16,
    title: "三角形と角",
    subtitle: "三角形と角を調べよう",
    category: "図形",
    keywords: ["二等辺三角形", "正三角形", "辺", "角", "同じ長さ", "長さ", "コンパス", "なかま分け", "とくちょう"],
    levels: [
      "二等辺三角形と正三角形は、どんな三角形ですか。辺の長さに着目して説明しましょう。",
      "身の回りで二等辺三角形や正三角形に似た形を見つけ、辺の長さに目をつけて説明しましょう。",
      "コンパスを使うと、同じ長さの辺をもつ三角形を作りやすいのはなぜですか。",
      "友だちが見た目だけで三角形を分類しています。辺や角に着目する大切さを説明しましょう。"
    ]
  },
  {
    id: "vertical-multiplication-2",
    order: 17,
    title: "かけ算の筆算（2）",
    subtitle: "かけ算の筆算のしかたをさらに考えよう",
    category: "数と計算",
    keywords: ["何十をかける", "2けたをかける", "一の位の分", "十の位の分", "ずらす", "分けてかける", "位", "筆算", "3けた"],
    levels: [
      "2けたの数をかける筆算では、どんな計算を分けて行っていますか。",
      "2けたをかける場面を1つ作り、一の位の分と十の位の分を説明しましょう。",
      "筆算で2段に分けて書く答えは、それぞれ何を表していますか。位とつなげて説明しましょう。",
      "友だちが十の位をかけた答えを一の位から書いています。なぜずれるのか説明しましょう。"
    ]
  },
  {
    id: "soroban",
    order: 18,
    title: "そろばん",
    subtitle: "そろばんで計算しよう",
    category: "数と計算",
    keywords: ["そろばん", "位", "一の位", "十の位", "五だま", "一だま", "10になる", "くり上がり", "たし算"],
    levels: [
      "そろばんは、玉と位を使って数をどのように表していますか。",
      "そろばんで表す数を1つ選び、一だまと五だまの動きで説明しましょう。",
      "10になると、そろばんの玉や位はどう変わりますか。くり上がりとつなげて説明しましょう。",
      "友だちが玉の数だけ見て答えを決めています。位を見る大切さを説明しましょう。"
    ]
  }
];

const LEVEL_META = [
  { title: "いみをせつめいする", short: "いみ" },
  { title: "れいをつくる", short: "れい" },
  { title: "つなげて考える", short: "つながり" },
  { title: "まちがいを直す・広げる", short: "せつめい" },
  { title: "さいごにまとめる", short: "まとめ" }
];

const CONNECTOR_WORDS = ["だから", "たとえば", "同じ", "ちがう", "つまり", "でも", "もし", "なぜなら"];

const STORAGE_KEY = "math_jump_dojo_grade3";

const state = {
  unitId: UNITS[0].id,
  levelIndex: 0,
  studentName: "",
  responses: {},
  selectedNoteId: null,
  activeLineIndex: null,
  lineMode: false
};

const els = {
  studentName: document.getElementById("student-name"),
  studentNameFinal: document.getElementById("student-name-final"),
  unitNameFinal: document.getElementById("unit-name-final"),
  unitSelect: document.getElementById("unit-select"),
  unitList: document.getElementById("unit-list"),
  progressTotal: document.getElementById("progress-total"),
  unitCategory: document.getElementById("unit-category"),
  unitTitle: document.getElementById("unit-title"),
  unitSubtitle: document.getElementById("unit-subtitle"),
  unitMeterText: document.getElementById("unit-meter-text"),
  unitMeterBar: document.getElementById("unit-meter-bar"),
  levelTabs: document.getElementById("level-tabs"),
  levelLabel: document.getElementById("level-label"),
  levelTitle: document.getElementById("level-title"),
  questionText: document.getElementById("question-text"),
  levelWork: document.getElementById("level-work"),
  finalWork: document.getElementById("final-work"),
  answerReviewList: document.getElementById("answer-review-list"),
  answerInput: document.getElementById("answer-input"),
  summaryInput: document.getElementById("summary-input"),
  hintBox: document.getElementById("hint-box"),
  keywordList: document.getElementById("keyword-list"),
  structureBoard: document.getElementById("structure-board"),
  boardLines: document.getElementById("board-lines"),
  connectorPalette: document.getElementById("connector-palette"),
  btnLineMode: document.getElementById("btn-line-mode"),
  btnAddNote: document.getElementById("btn-add-note"),
  btnResetBoard: document.getElementById("btn-reset-board"),
  btnResetUnit: document.getElementById("btn-reset-unit"),
  toast: document.getElementById("toast")
};

function currentUnit() {
  return UNITS.find(unit => unit.id === state.unitId) || UNITS[0];
}

function ensureUnitState(unitId) {
  if (!state.responses[unitId]) {
    state.responses[unitId] = {
      answers: ["", "", "", ""],
      checks: [{}, {}, {}, {}],
      boards: [null, null, null, null],
      summary: ""
    };
  }
  if (!state.responses[unitId].boards) {
    state.responses[unitId].boards = [null, null, null, null];
  }
  return state.responses[unitId];
}

function ensureBoard(unitId, levelIndex) {
  const unit = UNITS.find(item => item.id === unitId) || UNITS[0];
  const unitState = ensureUnitState(unitId);
  if (!unitState.boards[levelIndex]) {
    unitState.boards[levelIndex] = createDefaultBoard(unit, levelIndex);
  }
  if (unitState.boards[levelIndex].layoutVersion !== 3) {
    migrateBoardLayout(unitState.boards[levelIndex]);
  }
  return unitState.boards[levelIndex];
}

function createDefaultBoard(unit, levelIndex) {
  const notes = [];
  let nextNoteId = 1;
  notes.push({
    id: `n${nextNoteId++}`,
    text: `Q：${easyText(unit.levels[levelIndex])}`,
    type: "question",
    x: 24,
    y: 24
  });
  return { notes, lines: [], nextNoteId, layoutVersion: 3 };
}

function migrateBoardLayout(board) {
  const removedIds = new Set();
  board.notes.forEach(note => {
    if (note.type === "question") {
      note.x = 24;
      note.y = 24;
    }
    if (note.type === "keyword") {
      removedIds.add(note.id);
    }
  });
  board.notes = board.notes.filter(note => note.type !== "keyword");
  board.lines = board.lines.filter(line => !removedIds.has(line.from) && !removedIds.has(line.to));
  board.layoutVersion = 3;
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderProgressOnly();
}

function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const saved = JSON.parse(raw);
    state.unitId = saved.unitId || state.unitId;
    state.levelIndex = saved.levelIndex || 0;
    state.studentName = saved.studentName || "";
    state.responses = saved.responses || {};
  } catch {
    showToast("保存データを読みこめませんでした");
  }
}

function renderUnitOptions() {
  els.unitSelect.innerHTML = UNITS.map(unit => (
    `<option value="${unit.id}">${unit.order}. ${unit.title}</option>`
  )).join("");

  els.unitList.innerHTML = UNITS.map(unit => {
    const progress = getUnitProgress(unit.id);
    return `
      <button class="unit-list-item" type="button" data-unit-id="${unit.id}">
        <span>${unit.order}. ${unit.title}</span>
        <span class="unit-pill">${progress.done}/${progress.total}</span>
      </button>
    `;
  }).join("");

  els.unitList.querySelectorAll("[data-unit-id]").forEach(button => {
    button.addEventListener("click", () => switchUnit(button.dataset.unitId));
  });
}

function renderLevelTabs() {
  els.levelTabs.innerHTML = LEVEL_META.map((level, index) => {
    const unitState = ensureUnitState(state.unitId);
    const done = index < 4
      ? Boolean(unitState.answers[index]?.trim())
      : Boolean(unitState.summary?.trim());
    return `
      <button class="level-tab" type="button" data-level-index="${index}">
        <span class="level-no">L${index + 1}</span>
        <span>${level.short}</span>
        <span class="level-dot ${done ? "is-done" : ""}"></span>
      </button>
    `;
  }).join("");

  els.levelTabs.querySelectorAll("[data-level-index]").forEach(button => {
    button.addEventListener("click", () => {
      state.levelIndex = Number(button.dataset.levelIndex);
      save();
      render();
    });
  });
}

function render() {
  const unit = currentUnit();
  const unitState = ensureUnitState(unit.id);
  const level = LEVEL_META[state.levelIndex];
  const isFinal = state.levelIndex === 4;

  els.studentName.value = state.studentName;
  if (els.studentNameFinal) els.studentNameFinal.value = state.studentName;
  if (els.unitNameFinal) els.unitNameFinal.value = `${unit.order}. ${unit.title}`;
  els.unitSelect.value = unit.id;
  els.unitCategory.textContent = easyText(unit.category);
  els.unitTitle.textContent = `${unit.order}. ${unit.title}`;
  els.unitSubtitle.textContent = easyText(unit.subtitle);
  els.summaryInput.value = unitState.summary || "";
  els.levelWork.hidden = isFinal;
  els.finalWork.hidden = !isFinal;

  state.selectedNoteId = null;
  state.activeLineIndex = null;
  renderLevelTabs();
  if (isFinal) {
    renderFinalReview(unit, unitState);
  } else {
    els.levelLabel.textContent = `レベル ${state.levelIndex + 1}`;
    els.levelTitle.textContent = level.title;
    els.questionText.textContent = easyText(unit.levels[state.levelIndex]);
    els.answerInput.value = unitState.answers[state.levelIndex] || "";
    renderKeywords(unit);
    renderBoard();
    renderChecks(unitState.checks[state.levelIndex] || {});
  }
  renderProgressOnly();
  updateActiveButtons();
  updateLineModeButton();
}

function renderFinalReview(unit, unitState) {
  els.answerReviewList.innerHTML = unit.levels.map((question, index) => {
    const answer = compactAnswer(unitState.answers[index]?.trim());
    return `
      <article class="answer-review">
        <div class="review-head">
          <span>L${index + 1}</span>
          <strong>${LEVEL_META[index].short}</strong>
        </div>
        <p class="review-question">${escapeHtml(easyText(question))}</p>
        <p class="review-answer">${escapeHtml(answer)}</p>
      </article>
    `;
  }).join("");
}

function compactAnswer(answer) {
  if (!answer) return "まだ書いていません。";
  return answer.length > 90 ? `${answer.slice(0, 90)}…` : answer;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderKeywords(unit) {
  els.keywordList.innerHTML = unit.keywords
    .map(keyword => {
      const label = easyText(keyword);
      return `<button class="keyword" type="button" data-keyword="${escapeHtml(label)}">${escapeHtml(label)}</button>`;
    })
    .join("");
  els.keywordList.querySelectorAll("[data-keyword]").forEach(button => {
    button.addEventListener("click", () => addKeywordNote(button.dataset.keyword));
  });
}

function renderChecks(checks) {
  document.querySelectorAll("[data-check]").forEach(input => {
    input.checked = Boolean(checks[input.dataset.check]);
  });
}

function renderBoard() {
  const board = ensureBoard(state.unitId, state.levelIndex);
  centerQuestionNote(board, currentUnit());
  els.structureBoard.querySelectorAll(".board-note").forEach(note => note.remove());

  board.notes.forEach(note => {
    const el = document.createElement("div");
    el.className = `board-note note-${note.type}`;
    el.dataset.noteId = note.id;
    el.style.left = `${note.x}px`;
    el.style.top = `${note.y}px`;

    const content = document.createElement("div");
    content.className = "board-note-content";
    content.textContent = note.text;
    content.contentEditable = "true";
    content.spellcheck = false;
    content.addEventListener("blur", () => {
      note.text = content.textContent.trim() || "メモ";
      save();
      renderBoardLines();
    });
    content.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        event.preventDefault();
        content.blur();
      }
    });

    if (note.type !== "question") {
      const del = document.createElement("button");
      del.className = "note-delete";
      del.type = "button";
      del.textContent = "×";
      del.addEventListener("click", event => {
        event.stopPropagation();
        deleteBoardNote(note.id);
      });
      el.appendChild(del);
    }

    el.appendChild(content);
    el.addEventListener("click", event => handleBoardNoteClick(event, note.id));
    if (note.type !== "question") {
      setupBoardDrag(el, note);
    }
    els.structureBoard.appendChild(el);
  });

  renderBoardLines();
}

function centerQuestionNote(board, unit) {
  const question = board.notes.find(note => note.type === "question");
  if (!question) return;
  const boardWidth = els.structureBoard.clientWidth || 900;
  question.text = `Q：${easyText(unit.levels[state.levelIndex])}`;
  question.x = Math.max(16, Math.round(boardWidth / 2 - 150));
  question.y = 22;
}

function setupBoardDrag(el, note) {
  let startX = 0;
  let startY = 0;
  let originX = 0;
  let originY = 0;
  let dragging = false;

  el.addEventListener("pointerdown", event => {
    if (event.target.closest("button") || event.target.isContentEditable) return;
    dragging = true;
    startX = event.clientX;
    startY = event.clientY;
    originX = note.x;
    originY = note.y;
    el.setPointerCapture(event.pointerId);
    el.classList.add("is-dragging");
  });

  el.addEventListener("pointermove", event => {
    if (!dragging) return;
    const rect = els.structureBoard.getBoundingClientRect();
    const nextX = originX + event.clientX - startX;
    const nextY = originY + event.clientY - startY;
    note.x = clamp(nextX, 8, rect.width - el.offsetWidth - 8);
    note.y = clamp(nextY, 8, rect.height - el.offsetHeight - 8);
    el.style.left = `${note.x}px`;
    el.style.top = `${note.y}px`;
    renderBoardLines();
  });

  el.addEventListener("pointerup", event => {
    if (!dragging) return;
    dragging = false;
    el.releasePointerCapture(event.pointerId);
    el.classList.remove("is-dragging");
    save();
  });
}

function handleBoardNoteClick(event, noteId) {
  if (!state.lineMode && !event.ctrlKey && !event.metaKey) return;
  event.preventDefault();
  event.stopPropagation();
  const board = ensureBoard(state.unitId, state.levelIndex);
  if (!state.selectedNoteId) {
    state.selectedNoteId = noteId;
    markSelectedNote();
    showToast("つなげたいカードをもう1つえらんでください");
    return;
  }
  if (state.selectedNoteId === noteId) {
    state.selectedNoteId = null;
    markSelectedNote();
    return;
  }
  const exists = board.lines.some(line => sameLine(line, state.selectedNoteId, noteId));
  if (exists) {
    board.lines = board.lines.filter(line => !sameLine(line, state.selectedNoteId, noteId));
  } else {
    board.lines.push({ from: state.selectedNoteId, to: noteId, label: "つながる" });
  }
  state.selectedNoteId = null;
  state.lineMode = false;
  save();
  renderBoard();
  updateLineModeButton();
}

function sameLine(line, a, b) {
  return (line.from === a && line.to === b) || (line.from === b && line.to === a);
}

function markSelectedNote() {
  els.structureBoard.querySelectorAll(".board-note").forEach(el => {
    el.classList.toggle("is-selected", el.dataset.noteId === state.selectedNoteId);
  });
}

function toggleLineMode() {
  state.lineMode = !state.lineMode;
  state.selectedNoteId = null;
  updateLineModeButton();
  markSelectedNote();
  showToast(state.lineMode ? "つなげるカードを2つえらんでください" : "線つなぎをやめました");
}

function updateLineModeButton() {
  els.btnLineMode.classList.toggle("is-active", state.lineMode);
  els.btnLineMode.textContent = state.lineMode ? "線つなぎ中" : "線つなぎ";
}

function renderBoardLines() {
  const board = ensureBoard(state.unitId, state.levelIndex);
  const noteMap = new Map(board.notes.map(note => [note.id, note]));
  els.boardLines.innerHTML = "";
  els.structureBoard.querySelectorAll(".line-label").forEach(label => label.remove());
  board.lines.forEach((line, index) => {
    const from = noteMap.get(line.from);
    const to = noteMap.get(line.to);
    if (!from || !to) return;
    const fromPoint = noteAnchor(from);
    const toPoint = noteAnchor(to);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "line");
    path.setAttribute("x1", String(fromPoint.x));
    path.setAttribute("y1", String(fromPoint.y));
    path.setAttribute("x2", String(toPoint.x));
    path.setAttribute("y2", String(toPoint.y));
    path.dataset.lineIndex = String(index);
    path.addEventListener("click", () => {
      board.lines.splice(index, 1);
      state.activeLineIndex = null;
      save();
      renderBoard();
    });
    els.boardLines.appendChild(path);

    const label = document.createElement("div");
    label.className = `line-label ${state.activeLineIndex === index ? "is-active" : ""}`;
    label.dataset.lineIndex = String(index);
    label.contentEditable = "true";
    label.spellcheck = false;
    label.textContent = line.label || "つながる";
    label.style.left = `${(fromPoint.x + toPoint.x) / 2 - 28}px`;
    label.style.top = `${(fromPoint.y + toPoint.y) / 2 - 12}px`;
    label.title = "線のことばを書けます";
    label.addEventListener("click", event => {
      event.stopPropagation();
      state.activeLineIndex = index;
      renderConnectorPalette();
      markActiveLineLabel();
    });
    label.addEventListener("focus", () => {
      state.activeLineIndex = index;
      renderConnectorPalette();
      markActiveLineLabel();
    });
    label.addEventListener("pointerdown", event => event.stopPropagation());
    label.addEventListener("blur", () => {
      line.label = label.textContent.trim() || "つながる";
      save();
    });
    label.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        event.preventDefault();
        label.blur();
      }
    });
    els.structureBoard.appendChild(label);
  });
  markSelectedNote();
  renderConnectorPalette();
}

function markActiveLineLabel() {
  els.structureBoard.querySelectorAll(".line-label").forEach(label => {
    label.classList.toggle("is-active", Number(label.dataset.lineIndex) === state.activeLineIndex);
  });
}

function renderConnectorPalette() {
  if (!els.connectorPalette) return;
  const board = ensureBoard(state.unitId, state.levelIndex);
  const hasActiveLine = Number.isInteger(state.activeLineIndex) && Boolean(board.lines[state.activeLineIndex]);
  els.connectorPalette.innerHTML = CONNECTOR_WORDS.map(word => (
    `<button class="connector-chip" type="button" data-connector="${escapeHtml(word)}"${hasActiveLine ? "" : " disabled"}>${escapeHtml(word)}</button>`
  )).join("");
  els.connectorPalette.querySelectorAll("[data-connector]").forEach(button => {
    button.addEventListener("click", () => applyConnectorWord(button.dataset.connector));
  });
}

function applyConnectorWord(word) {
  const board = ensureBoard(state.unitId, state.levelIndex);
  if (!Number.isInteger(state.activeLineIndex) || !board.lines[state.activeLineIndex]) {
    showToast("先に線のことばをクリックしてください");
    return;
  }
  board.lines[state.activeLineIndex].label = word;
  save();
  renderBoardLines();
}

function noteAnchor(note) {
  const width = note.type === "question" ? 300 : 132;
  return {
    x: note.x + width / 2,
    y: note.y + 34
  };
}

function addBoardNote() {
  const board = ensureBoard(state.unitId, state.levelIndex);
  const text = window.prompt("ふやすメモを書いてください。", "自分の考え");
  if (!text || !text.trim()) return;
  board.notes.push({
    id: `n${board.nextNoteId++}`,
    text: text.trim(),
    type: "memo",
    x: 40 + (board.notes.length % 4) * 150,
    y: 40 + Math.floor(board.notes.length / 4) * 80
  });
  save();
  renderBoard();
}

function addKeywordNote(keyword) {
  const board = ensureBoard(state.unitId, state.levelIndex);
  const count = board.notes.filter(note => note.type !== "question").length;
  board.notes.push({
    id: `n${board.nextNoteId++}`,
    text: keyword,
    type: "keyword",
    x: 24 + (count % 5) * 150,
    y: 112 + Math.floor(count / 5) * 68
  });
  save();
  renderBoard();
}

function deleteBoardNote(noteId) {
  const board = ensureBoard(state.unitId, state.levelIndex);
  board.notes = board.notes.filter(note => note.id !== noteId);
  board.lines = board.lines.filter(line => line.from !== noteId && line.to !== noteId);
  state.activeLineIndex = null;
  save();
  renderBoard();
}

function resetCurrentBoard() {
  const unit = currentUnit();
  const ok = window.confirm("このレベルのボードをはじめにもどしますか。");
  if (!ok) return;
  ensureUnitState(unit.id).boards[state.levelIndex] = createDefaultBoard(unit, state.levelIndex);
  state.selectedNoteId = null;
  state.activeLineIndex = null;
  save();
  renderBoard();
  showToast("ボードをもどしました");
}

function getBoardText(unitId, levelIndex) {
  const board = ensureBoard(unitId, levelIndex);
  const lines = board.lines.map(line => {
    const from = board.notes.find(note => note.id === line.from)?.text || "";
    const to = board.notes.find(note => note.id === line.to)?.text || "";
    return `${from} --${line.label || "つながる"}-- ${to}`;
  });
  return [
    board.notes.map(note => note.text).join(" / "),
    lines.length ? `線: ${lines.join(" / ")}` : ""
  ].filter(Boolean).join("\n");
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function renderProgressOnly() {
  renderUnitListProgress();
  const progress = getUnitProgress(state.unitId);
  els.unitMeterText.textContent = `${progress.done}/${progress.total}`;
  els.unitMeterBar.style.width = `${Math.round(progress.done / progress.total * 100)}%`;

  const allTotal = UNITS.length * 5;
  const allDone = UNITS.reduce((sum, unit) => sum + getUnitProgress(unit.id).done, 0);
  els.progressTotal.textContent = `${Math.round(allDone / allTotal * 100)}%`;
}

function renderUnitListProgress() {
  els.unitList.querySelectorAll("[data-unit-id]").forEach(button => {
    const unitId = button.dataset.unitId;
    const progress = getUnitProgress(unitId);
    const pill = button.querySelector(".unit-pill");
    if (pill) pill.textContent = `${progress.done}/${progress.total}`;
    button.classList.toggle("is-active", unitId === state.unitId);
    button.classList.toggle("is-complete", progress.done === progress.total);
  });
}

function updateActiveButtons() {
  els.levelTabs.querySelectorAll("[data-level-index]").forEach(button => {
    button.classList.toggle("is-active", Number(button.dataset.levelIndex) === state.levelIndex);
  });
}

function getUnitProgress(unitId) {
  const unitState = ensureUnitState(unitId);
  const answersDone = unitState.answers.filter(answer => answer.trim().length > 0).length;
  const summaryDone = unitState.summary.trim().length > 0 ? 1 : 0;
  return { done: answersDone + summaryDone, total: 5 };
}

function switchUnit(unitId) {
  state.unitId = unitId;
  state.levelIndex = 0;
  state.selectedNoteId = null;
  state.activeLineIndex = null;
  state.lineMode = false;
  save();
  render();
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    els.toast.classList.remove("is-visible");
  }, 1800);
}

function resetCurrentUnit() {
  const unit = currentUnit();
  const ok = window.confirm(`${unit.title}の答えをリセットしますか。`);
  if (!ok) return;
  delete state.responses[unit.id];
  ensureUnitState(unit.id);
  state.levelIndex = 0;
  save();
  render();
  showToast("この単元をリセットしました");
}

function easyText(value) {
  const replacements = [
    ["説明", "せつめい"],
    ["意味", "いみ"],
    ["例", "れい"],
    ["場面", "ばめん"],
    ["計算", "けい算"],
    ["自分", "自分"],
    ["言葉", "ことば"],
    ["考え", "考え"],
    ["使う", "使う"],
    ["答え", "答え"],
    ["必要", "ひつよう"],
    ["関係", "かんけい"],
    ["単位", "たんい"],
    ["数直線", "数直線"],
    ["身の回り", "身のまわり"],
    ["友だち", "友だち"],
    ["直して", "なおして"],
    ["大切さ", "大切さ"],
    ["結論", "考え"],
    ["処理", "考え方"],
    ["分類", "なかま分け"],
    ["性質", "とくちょう"],
    ["特徴", "とくちょう"],
    ["注目", "目をつける"],
    ["未知", "わからない"],
    ["数量", "数の"],
    ["構造", "しくみ"],
    ["整数", "整数"],
    ["小数", "小数"],
    ["分数", "分数"],
    ["分母", "分母"],
    ["分子", "分子"],
    ["商", "答え"],
    ["暗算", "暗算"],
    ["筆算", "筆算"],
    ["見積もり", "だいたいの数"],
    ["目盛り", "めもり"],
    ["整理", "せいり"],
    ["読み取る", "読みとる"],
    ["測定", "はかる"],
    ["図形", "形"],
    ["数量関係", "数のかんけい"],
    ["データの活用", "表とグラフ"],
    ["比べる", "くらべる"],
    ["倍", "ばい"],
    ["等分", "同じ大きさに分ける"],
    ["同分母", "同じ分母"],
    ["単位分数", "1つ分の分数"],
    ["直径", "直径"],
    ["半径", "半径"],
    ["中心", "中心"],
    ["円", "円"],
    ["球", "球"],
    ["角", "角"],
    ["辺", "辺"],
    ["正三角形", "正三角形"],
    ["二等辺三角形", "二等辺三角形"],
    ["十進位取り記数法", "位のしくみ"],
    ["一の位", "一の位"],
    ["十の位", "十の位"],
    ["何倍", "何ばい"],
    ["何人分", "何人分"],
    ["1人分", "1人分"],
    ["同じ数ずつ", "同じ数ずつ"],
    ["かけられる数", "かけられる数"],
    ["かける数", "かける数"],
    ["わる数", "わる数"],
    ["わられる数", "わられる数"],
    ["0のかけ算", "0のかけ算"],
    ["10のかけ算", "10のかけ算"]
  ];
  return replacements.reduce((text, [from, to]) => text.replaceAll(from, to), String(value));
}

function bindEvents() {
  els.studentName.addEventListener("input", () => {
    state.studentName = els.studentName.value;
    save();
  });

  els.unitSelect.addEventListener("change", () => switchUnit(els.unitSelect.value));

  els.answerInput.addEventListener("input", () => {
    ensureUnitState(state.unitId).answers[state.levelIndex] = els.answerInput.value;
    save();
    renderLevelTabs();
    updateActiveButtons();
  });

  els.summaryInput.addEventListener("input", () => {
    ensureUnitState(state.unitId).summary = els.summaryInput.value;
    save();
  });

  document.querySelectorAll("[data-check]").forEach(input => {
    input.addEventListener("change", () => {
      const unitState = ensureUnitState(state.unitId);
      unitState.checks[state.levelIndex] = unitState.checks[state.levelIndex] || {};
      unitState.checks[state.levelIndex][input.dataset.check] = input.checked;
      save();
    });
  });

  els.btnLineMode.addEventListener("click", toggleLineMode);
  els.btnAddNote.addEventListener("click", addBoardNote);
  els.btnResetBoard.addEventListener("click", resetCurrentBoard);
  els.btnResetUnit.addEventListener("click", resetCurrentUnit);
}

load();
renderUnitOptions();
bindEvents();
render();
