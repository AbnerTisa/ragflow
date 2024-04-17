export default {
  translation: {
    common: {
      delete: '刪除',
      deleteModalTitle: '確定刪除嗎?',
      ok: '是',
      cancel: '否',
      total: '總共',
      rename: '重命名',
      name: '名稱',
      save: '保持',
      namePlaceholder: '請輸入名稱',
      next: '下一步',
      create: '創建',
      edit: '編輯',
      upload: '上傳',
      english: '英語',
      chinese: '簡體中文',
      traditionalChinese: '繁體中文',
      language: '語言',
      languageMessage: '請輸入語言',
      languagePlaceholder: '請選擇語言',
      copy: '複製',
      copied: '複製成功',
    },
    login: {
      login: '登入',
      signUp: '註冊',
      loginDescription: '很高興再次見到您！',
      registerDescription: '很高興您加入！',
      emailLabel: '郵箱',
      emailPlaceholder: '請輸入郵箱地址',
      passwordLabel: '密碼',
      passwordPlaceholder: '請輸入密碼',
      rememberMe: '記住我',
      signInTip: '沒有帳戶？',
      signUpTip: '已經有帳戶？',
      nicknameLabel: '名稱',
      nicknamePlaceholder: '請輸入名稱',
      register: '創建賬戶',
      continue: '繼續',
      title: '開始構建您的智能助手',
      description:
        '免費註冊以探索頂級 RAG 技術。創建知識庫和人工智能來增強您的業務',
      review: '來自 500 多條評論',
    },
    header: {
      knowledgeBase: '知識庫',
      chat: '聊天',
      register: '註冊',
      signin: '登入',
      home: '首頁',
      setting: '用戶設置',
      logout: '登出',
    },
    knowledgeList: {
      welcome: '歡迎回來',
      description: '今天我們要使用哪個知識庫？',
      createKnowledgeBase: '創建知識庫',
      name: '名稱',
      namePlaceholder: '請輸入名稱',
      doc: '文件',
    },
    knowledgeDetails: {
      dataset: '數據集',
      testing: '檢索測試',
      configuration: '配置',
      files: '文件',
      name: '名稱',
      namePlaceholder: '請輸入名稱',
      doc: '文件',
      datasetDescription: '嘿，添加數據集後別忘了調整解析塊！😉',
      addFile: '新增文件',
      searchFiles: '搜索文件',
      localFiles: '本地文件',
      emptyFiles: '新建空文件',
      chunkNumber: '分塊數',
      uploadDate: '上傳日期',
      chunkMethod: '解析方法',
      enabled: '啟用',
      disabled: '禁用',
      action: '動作',
      parsingStatus: '解析狀態',
      processBeginAt: '流程開始於',
      processDuration: '過程持續時間',
      progressMsg: '進度消息',
      testingDescription: '最後一步！成功後，剩下的就交給Infiniflow AI吧。',
      topK: 'top k',
      topKTip:
        '對於計算成本，並非所有檢索到的塊都會計算與查詢的向量餘弦相似度。Top K越大，召回率越高，檢索速度越慢。',
      similarityThreshold: '相似度閾值',
      similarityThresholdTip:
        '我們使用混合相似度得分來評估兩行文本之間的距離。它是加權關鍵詞相似度和向量餘弦相似度。如果查詢和塊之間的相似度小於此閾值，則該塊將被過濾掉。',
      vectorSimilarityWeight: '向量相似度權重',
      vectorSimilarityWeightTip:
        '我們使用混合相似度得分來評估兩行文本之間的距離。它是加權關鍵詞相似度和向量餘弦相似度。兩個權重之和為 1.0。',
      testText: '測試文本',
      testTextPlaceholder: '請輸入您的問題！',
      testingLabel: '測試',
      similarity: '混合相似度',
      termSimilarity: '關鍵詞相似度',
      vectorSimilarity: '向量相似度',
      hits: '命中次數',
      view: '看法',
      filesSelected: '選定的文件',
      upload: '上傳',
      run: '啟動',
      runningStatus0: '未啟動',
      runningStatus1: '解析中',
      runningStatus2: '取消',
      runningStatus3: '成功',
      runningStatus4: '失敗',
      pageRanges: '頁碼範圍',
      pageRangesTip:
        '頁碼範圍：定義需要解析的頁面範圍。不包含在這些範圍內的頁面將被忽略。',
      fromPlaceholder: '從',
      fromMessage: '缺少起始頁碼',
      toPlaceholder: '到',
      toMessage: '缺少結束頁碼（不包含）',
      layoutRecognize: '佈局識別',
      layoutRecognizeTip:
        '使用視覺模型進行佈局分析，以更好地識別文檔結構，找到標題、文本塊、圖像和表格的位置。如果沒有此功能，則只能獲取 PDF 的純文本。',
      taskPageSize: '任務頁面大小',
      taskPageSizeMessage: '請輸入您的任務頁面大小！',
      taskPageSizeTip: `如果使用佈局識別，PDF 文件將被分成連續的組。佈局分析將在組之間並行執行，以提高處理速度。“任務頁面大小”決定組的大小。頁面大小越大，將頁面之間的連續文本分割成不同塊的機會就越低。`,
      addPage: '新增頁面',
      greaterThan: '當前值必須大於起始值！',
      greaterThanPrevious: '當前值必須大於之前的值！',
      selectFiles: '選擇文件',
      changeSpecificCategory: '更改特定類別',
      uploadTitle: '點擊或拖拽文件至此區域即可上傳',
      uploadDescription: '支持單次或批量上傳。嚴禁上傳公司數據或其他違禁文件。',
      chunk: '解析塊',
      bulk: '批量',
      cancel: '取消',
    },
    knowledgeConfiguration: {
      titleDescription: '在這裡更新您的知識庫詳細信息，尤其是解析方法。',
      name: '知識庫名稱',
      photo: '知識庫圖片',
      description: '描述',
      language: '語言',
      languageMessage: '請輸入語言',
      languagePlaceholder: '請輸入語言',
      permissions: '權限',
      embeddingModel: '嵌入模型',
      chunkTokenNumber: '塊Token數',
      chunkTokenNumberMessage: '塊Token數是必填項',
      embeddingModelTip:
        '用於嵌入塊的嵌入模型。一旦知識庫有了塊，它就無法更改。如果你想改變它，你需要刪除所有的塊。',
      permissionsTip: '如果權限是“團隊”，則所有團隊成員都可以操作知識庫。',
      chunkTokenNumberTip: '它大致確定了一個塊的Token數量。',
      chunkMethod: '解析方法',
      chunkMethodTip: '說明位於右側。',
      upload: '上傳',
      english: '英語',
      chinese: '中文',
      embeddingModelPlaceholder: '請選擇嵌入模型',
      chunkMethodPlaceholder: '請選擇分塊方法',
      save: '保持',
      me: '只有我',
      team: '團隊',
      cancel: '取消',
      methodTitle: '分塊方法說明',
      methodExamples: '示例',
      methodExamplesDescription: '提出以下屏幕截圖以促進理解。',
      dialogueExamplesTitle: '對話示例',
      methodEmpty: '這將顯示知識庫類別的可視化解釋',
      book: `<p>支持的文件格式為<b>DOCX</b>、<b>PDF</b>、<b>TXT</b>。</p><p>
        由於一本書很長，並不是所有部分都有用，如果是 PDF，
        請為每本書設置<i>頁面範圍</i>，以消除負面影響並節省分析計算時間。</p>`,
      laws: `<p>支持的文件格式為<b>DOCX</b>、<b>PDF</b>、<b>TXT</b>。</p><p>
        法律文件有非常嚴格的書寫格式。我們使用文本特徵來檢測分割點。
        </p><p>
        chunk的粒度與'文章'一致，所有上層文本都會包含在chunk中。
        </p>`,
      manual: `<p>僅支持<b>PDF</b>。</p><p>
        我們假設手冊具有分層部分結構。我們使用最低的部分標題作為對文檔進行切片的樞軸。
        因此，同一部分中的圖和表不會被分割，並且塊大小可能會很大。
        </p>`,
      naive: `<p>支持的文件格式為<b>DOCX、EXCEL、PPT、IMAGE、PDF、TXT</b>。</p>
        <p>此方法將簡單的方法應用於塊文件：</p>
        <p>
        <li>系統將使用視覺檢測模型將連續文本分割成多個片段。</li>
        <li>接下來，這些連續的片段被合併成Token數不超過“Token數”的塊。</li></p>`,
      paper: `<p>僅支持<b>PDF</b>文件。</p><p>
        如果我們的模型運行良好，論文將按其部分進行切片，例如<i>摘要、1.1、1.2</i>等。</p><p>
        這樣做的好處是LLM可以更好的概括論文中相關章節的內容，
        產生更全面的答案，幫助讀者更好地理解論文。
        缺點是它增加了 LLM 對話的背景並增加了計算成本，
        所以在對話過程中，你可以考慮減少‘<b>topN</b>’的設置。</p>`,
      presentation: `<p>支持的文件格式為<b>PDF</b>、<b>PPTX</b>。</p><p>
        每個頁面都將被視為一個塊。並且每個頁面的縮略圖都會被存儲。</p><p>
        <i>您上傳的所有PPT文件都會使用此方法自動分塊，無需為每個PPT文件進行設置。</i></p>`,
      qa: `<p>
      此塊方法支持<b> excel </b>和<b> csv/txt </b>文件格式。
    </p>
    <li>
      如果文件以<b> excel </b>格式，則應由兩個列組成
      沒有標題：一個提出問題，另一個用於答案，
      答案列之前的問題列。多張紙是
      只要列正確結構，就可以接受。
    </li>
    <li>
      如果文件以<b> csv/txt </b>格式為
      用作分開問題和答案的定界符。
    </li>
    <p>
      <i>
        未能遵循上述規則的文本行將被忽略，並且
        每個問答對將被認為是一個獨特的部分。
      </i>`,
      resume: `<p>支持的文件格式為<b>DOCX</b>、<b>PDF</b>、<b>TXT</b>。
        </p><p>
        簡歷有多種格式，就像一個人的個性一樣，但我們經常必須將它們組織成結構化數據，以便於搜索。
        </p><p>
        我們不是將簡歷分塊，而是將簡歷解析為結構化數據。作為HR，你可以扔掉所有的簡歷，
        您只需與<i>'ragflow'</i>交談即可列出所有符合資格的候選人。
        </p>
          `,
      table: `支持<p><b>excel</b>和<b>csv/txt</b>格式文件。</p><p>以下是一些提示： <ul> <li>对于Csv或Txt文件，列之间的分隔符为 <em><b>tab</b></em>。</li> <li>第一行必须是列标题。</li> <li>列标题必须是有意义的术语，以便我们的法学硕士能够理解。列举一些同义词时最好使用斜杠<i>'/'</i>来分隔，甚至更好使用方括号枚举值，例如 <i>“性別/性別（男性，女性）”</i>.<p>以下是标题的一些示例：<ol> <li>供应商/供货商<b>'tab'</b>顏色（黃色、紅色、棕色）<b>'tab'</b>性別（男、女）<b>'tab'</B>尺码（m、l、xl、xxl）</li> <li>姓名/名字<b>'tab'</b>電話/手機/微信<b>'tab'</b>最高学历（高中，职高，硕士，本科，博士，初中，中技，中专，专科，专升本，mpa，mba，emba）</li> </ol> </p> </li> <li>表中的每一行都将被视为一个块。</li> </ul>`,
      picture: `
       <p>支持圖像文件。視頻即將推出。</p><p>
        如果圖片中有文字，則應用 OCR 提取文字作為其文字描述。
        </p><p>
        如果OCR提取的文本不夠，可以使用視覺LLM來獲取描述。
        </p>`,
      one: `
      <p>支持的文件格式為<b>DOCX、EXCEL、PDF、TXT</b>。
        </p><p>
        對於一個文檔，它將被視為一個完整的塊，根本不會被分割。
        </p><p>
        如果你要總結的東西需要一篇文章的全部上下文，並且所選LLM的上下文長度覆蓋了文檔長度，你可以嘗試這種方法。
        </p>`,
    },
    chunk: {
      chunk: '解析塊',
      bulk: '批量',
      selectAll: '選擇所有',
      enabledSelected: '啟用選定的',
      disabledSelected: '禁用選定的',
      deleteSelected: '刪除選定的',
      search: '搜尋',
      all: '所有',
      enabled: '啟用',
      disabled: '禁用的',
      keyword: '關鍵詞',
      function: '函數',
      chunkMessage: '請輸入值！',
    },
    chat: {
      createAssistant: '新建助理',
      assistantSetting: '助理設置',
      promptEngine: '提示引擎',
      modelSetting: '模型設置',
      chat: '聊天',
      newChat: '新建聊天',
      send: '發送',
      sendPlaceholder: '消息概要助手...',
      chatConfiguration: '聊天配置',
      chatConfigurationDescription: '在這裡，為你的專業知識庫裝扮專屬助手！💕',
      assistantName: '助理姓名',
      assistantNameMessage: '助理姓名是必填項',
      namePlaceholder: '例如 賈維斯簡歷',
      assistantAvatar: '助理頭像',
      language: '語言',
      emptyResponse: '空回复',
      emptyResponseTip: `如果在知識庫中沒有檢索到用戶的問題，它將使用它作為答案。如果您希望 LLM 在未檢索到任何內容時提出自己的意見，請將此留空。`,
      setAnOpener: '設置開場白',
      setAnOpenerInitial: `你好！我是你的助理，有什麼可以幫到你的嗎？`,
      setAnOpenerTip: '您想如何歡迎您的客戶？',
      knowledgeBases: '知識庫',
      knowledgeBasesMessage: '請選擇',
      knowledgeBasesTip: '選擇關聯的知識庫。',
      system: '系統',
      systemInitialValue: `你是一个智能助手，请总结知识库的内容来回答问题，请列举知识库中的数据详细回答。当所有知识库内容都与问题无关时，你的回答必须包括“知识库中未找到您要的答案！”这句话。回答需要考虑聊天历史。
          以下是知识库：
          {knowledge}
          以上是知识库。`,
      systemMessage: '請輸入',
      systemTip:
        '當LLM回答問題時，你需要LLM遵循的說明，比如角色設計、答案長度和答案語言等。',
      topN: 'Top N',
      topNTip: `並非所有相似度得分高於“相似度閾值”的塊都會被提供給法學碩士。LLM 只能看到這些“Top N”塊。`,
      variable: '變量',
      variableTip: `如果您使用对话 API，变量可能会帮助您使用不同的策略与客户聊天。
        这些变量用于填写提示中的“系统”部分，以便给LLM一个提示。
        “知识”是一个非常特殊的变量，它将用检索到的块填充。
        “System”中的所有变量都应该用大括号括起来。`,
      add: '新增',
      key: '關鍵字',
      optional: '可選的',
      operation: '操作',
      model: '模型',
      modelTip: '大語言聊天模型',
      modelMessage: '請選擇',
      freedom: '自由',
      improvise: '即興創作',
      precise: '精確',
      balance: '平衡',
      freedomTip: `“精確”意味著法學碩士會保守並謹慎地回答你的問題。“即興發揮”意味著你希望法學碩士能夠自由地暢所欲言。“平衡”是謹慎與自由之間的平衡。`,
      temperature: '溫度',
      temperatureMessage: '溫度是必填項',
      temperatureTip:
        '該參數控制模型預測的隨機性。較低的溫度使模型對其響應更有信心，而較高的溫度則使其更具創造性和多樣性。',
      topP: '頂級P',
      topPMessage: 'Top P 是必填項',
      topPTip:
        '該參數也稱為“核心採樣”，它設置一個閾值來選擇較小的單詞集進行採樣。它專注於最可能的單詞，剔除不太可能的單詞。',
      presencePenalty: '出席處罰',
      presencePenaltyMessage: '出席處罰是必填項',
      presencePenaltyTip:
        '這會通過懲罰對話中已經出現的單詞來阻止模型重複相同的信息。',
      frequencyPenalty: '頻率懲罰',
      frequencyPenaltyMessage: '頻率懲罰是必填項',
      frequencyPenaltyTip:
        '與存在懲罰類似，這減少了模型頻繁重複相同單詞的傾向。',
      maxTokens: '最大token數',
      maxTokensMessage: '最大token數是必填項',
      maxTokensTip:
        '這設置了模型輸出的最大長度，以標記（單詞或單詞片段）的數量來衡量。',
      quote: '顯示引文',
      quoteTip: '是否應該顯示原文出處？',
      overview: '概覽',
      pv: '消息數',
      uv: '活躍用戶數',
      speed: 'Token 輸出速度',
      tokens: '消耗Token數',
      round: '會話互動數',
      thumbUp: '用戶滿意度',
      publicUrl: '公共url',
      preview: '預覽',
      embedded: '嵌入',
      serviceApiEndpoint: '服務API端點',
      apiKey: 'API鍵',
      apiReference: 'API參考',
      dateRange: '日期範圍：',
      backendServiceApi: '後端服務API',
      createNewKey: '創建新密鑰',
      created: '創建於',
      action: '操作',
    },
    setting: {
      profile: '概述',
      profileDescription: '在此更新您的照片和個人詳細信息。',
      password: '密碼',
      passwordDescription: '請輸入您當前的密碼以更改您的密碼。',
      model: '模型提供商',
      modelDescription: '在此管理您的帳戶設置和首選項。',
      team: '團隊',
      logout: '登出',
      username: '使用者名稱',
      usernameMessage: '請輸入用戶名',
      photo: '頭像',
      photoDescription: '這將顯示在您的個人資料上。',
      colorSchema: '主題',
      colorSchemaMessage: '請選擇您的主題！',
      colorSchemaPlaceholder: '請選擇您的主題！',
      bright: '明亮',
      dark: '暗色',
      timezone: '時區',
      timezoneMessage: '請選擇時區',
      timezonePlaceholder: '請選擇時區',
      email: '郵箱地址',
      emailDescription: '一旦註冊，電子郵件將無法更改。',
      currentPassword: '當前密碼',
      currentPasswordMessage: '請輸入當前密碼',
      newPassword: '新密碼',
      newPasswordMessage: '請輸入新密碼',
      newPasswordDescription: '您的新密碼必須超過 8 個字符。',
      confirmPassword: '確認新密碼',
      confirmPasswordMessage: '請確認新密碼',
      confirmPasswordNonMatchMessage: '您輸入的新密碼不匹配！',
      cancel: '取消',
      addedModels: '添加了的模型',
      modelsToBeAdded: '待添加的模型',
      addTheModel: '添加模型',
      apiKey: 'api-key',
      apiKeyMessage: '請輸入 api key!',
      apiKeyTip: 'API key可以通過註冊相應的LLM供應商來獲取。',
      showMoreModels: '展示更多模型',
      baseUrl: 'base-url',
      baseUrlTip:
        '如果您的 API 密鑰來自 OpenAI，請忽略它。任何其他中間提供商都會提供帶有 API 密鑰的基本 URL。',
      modify: '修改',
      systemModelSettings: '系統模型設置',
      chatModel: '聊天模型',
      chatModelTip: '所有新創建的知識庫都會使用默認的聊天LLM。',
      embeddingModel: '嵌入模型',
      embeddingModelTip: '所有新創建的知識庫都將使用的默認嵌入模型。',
      img2txtModel: 'img2Txt模型',
      img2txtModelTip:
        '所有新創建的知識庫都將使用默認的多模塊模型。它可以描述圖片或視頻。',
      sequence2txtModel: 'sequence2Txt模型',
      sequence2txtModelTip:
        '所有新創建的知識庫都將使用默認的 ASR 模型。使用此模型將語音翻譯為相應的文本。',
      workspace: '工作空間',
      upgrade: '升級',
      addLlmTitle: '添加Llm',
      modelName: '模型名稱',
      modelUid: '模型uid',
      modelType: '模型類型',
      addLlmBaseUrl: '基礎 Url',
      vision: '是否支持Vision',
      modelNameMessage: '請輸入模型名稱！',
      modelTypeMessage: '請輸入模型類型！',
      baseUrlNameMessage: '請輸入基礎 Url！',
      ollamaLink: '如何集成Ollama',
    },
    message: {
      registered: '註冊成功',
      logout: '登出成功',
      logged: '登錄成功',
      pleaseSelectChunk: '請選擇解析塊',
      modified: '更新成功',
      created: '創建成功',
      deleted: '刪除成功',
      renamed: '重命名成功',
      operated: '操作成功',
      updated: '更新成功',
      200: '服務器成功返回請求的數據。',
      201: '新建或修改數據成功。',
      202: '一個請求已經進入後台排隊（異步任務）。',
      204: '刪除數據成功。',
      400: '發出的請求有錯誤，服務器沒有進行新建或修改數據的操作。',
      401: '用戶沒有權限（Token、用戶名、密碼錯誤）。',
      403: '用戶得到授權，但是訪問是被禁止的。',
      404: '發出的請求針對的是不存在的記錄，服務器沒有進行操作。',
      406: '請求的格式不可得。',
      410: '請求的資源被永久刪除，且不會再得到的。',
      422: '當創建一個對象時，發生一個驗證錯誤。',
      500: '服務器發生錯誤，請檢查服務器。',
      502: '網關錯誤。',
      503: '服務不可用，服務器暫時過載或維護。',
      504: '網關超時。',
      requestError: '請求錯誤',
      networkAnomalyDescription: '您的網絡發生異常，無法連接服務器',
      networkAnomaly: '網絡異常',
      hint: '提示',
    },
    footer: {
      profile: '“保留所有權利 @ react”',
    },
    layout: {
      file: '文件',
      knowledge: '知識',
      chat: '聊天',
    },
  },
};