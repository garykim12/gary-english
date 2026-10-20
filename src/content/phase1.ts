import type { Phase } from "../types";

export const phase1: Phase = {
  phase: 1,
  title: "Survival Flow",
  titleKo: "생존 회화 — 리액션, 필러, 일상 흐름",
  days: [
    // ──────────────────────────────────────────────────────────────
    // DAY 1
    // ──────────────────────────────────────────────────────────────
    {
      day: 1,
      phase: 1,
      title: "Reactions 101",
      titleKo: "리액션의 기본 — 놀랄 때, 맞장구칠 때",
      introKo:
        "회화의 절반은 리액션이에요. 상대 말에 'No way!' 한 마디만 제때 던져도 대화가 살아 움직여요. 오늘은 입에 붙는 리액션 8개만 챙겨가요.",
      chunks: [
        {
          id: "d01-1",
          phrase: "No way.",
          ko: "말도 안 돼. / 진짜?",
          example: "A: I got free tickets to the Beyoncé show.\nB: No way. Take me or we're done.",
          exampleKo: "A: 나 비욘세 콘서트 공짜 티켓 생겼어.\nB: 말도 안 돼. 나 안 데려가면 절교야.",
          note:
            "놀람 + 약간의 '믿기지 않음'이에요. 'way'를 길게 끌면서 'No waaay'라고 하면 더 네이티브스러워요. 진짜 거절(절대 안 해)로도 쓰니까 톤이 중요해요.",
          register: "casual",
        },
        {
          id: "d01-2",
          phrase: "For real?",
          ko: "진짜로? / 실화야?",
          example: "A: My cat learned to open the fridge.\nB: For real? That's a crime in progress.",
          exampleKo: "A: 우리 고양이가 냉장고 여는 법을 배웠어.\nB: 실화야? 그거 범죄 현장인데.",
          note:
            "'Really?'보다 훨씬 캐주얼하고 젊은 느낌이에요. 반대로 'For real.'이라고 내려서 말하면 '진심이야'라는 강조가 돼요.",
          register: "casual",
        },
        {
          id: "d01-3",
          phrase: "That's wild.",
          ko: "대박이다. / 미쳤다.",
          example: "A: He proposed at a Costco.\nB: That's wild. Did she say yes next to the hot dogs?",
          exampleKo: "A: 걔 코스트코에서 프러포즈했대.\nB: 미쳤다. 핫도그 옆에서 승낙한 거야?",
          note:
            "좋은 일이든 황당한 일이든 '와 그건 좀 세다' 싶을 때 다 써요. 'crazy' 대신 요즘 20~30대가 제일 많이 쓰는 단어예요.",
          register: "casual",
        },
        {
          id: "d01-4",
          phrase: "Seriously?",
          ko: "진심이야? / 아 진짜?",
          example: "A: The meeting got moved to 7 a.m.\nB: Seriously? Who hurt them?",
          exampleKo: "A: 회의 아침 7시로 옮겨졌어.\nB: 진심이야? 대체 누가 그 사람들한테 상처를 준 거야?",
          note:
            "놀람에도 쓰지만 짜증 섞인 '아 진짜?'에 더 자주 나와요. 끝을 올리면 질문, 'Seriously.'라고 내리면 '진짜 어이없다'는 뜻이에요.",
          register: "neutral",
        },
        {
          id: "d01-5",
          phrase: "Oh nice.",
          ko: "오 좋네. / 오 괜찮다.",
          example: "A: I finally fixed the Wi-Fi.\nB: Oh nice. So we can stop yelling at the router.",
          exampleKo: "A: 드디어 와이파이 고쳤어.\nB: 오 좋네. 이제 공유기한테 소리 안 질러도 되겠다.",
          note:
            "작은 좋은 소식에 가볍게 던지는 리액션이에요. 너무 과하게 'Wow!' 하지 말고 'Oh nice'를 툭 던지면 자연스러워요.",
          register: "casual",
        },
        {
          id: "d01-6",
          phrase: "Shut up!",
          ko: "헐, 말도 안 돼! (좋은 의미)",
          example: "A: We're getting a puppy this weekend.\nB: Shut up! What are you naming him?",
          exampleKo: "A: 우리 이번 주말에 강아지 데려와.\nB: 헐 말도 안 돼! 이름은 뭐로 할 거야?",
          note:
            "'닥쳐'가 아니라 친구끼리 기쁜 소식 들었을 때 '헐!' 하는 리액션이에요. 웃는 얼굴 + 높은 톤이 필수예요. 모르는 사람한테는 절대 쓰지 마세요.",
          register: "slang",
        },
        {
          id: "d01-7",
          phrase: "That's rough.",
          ko: "아이고, 힘들겠다.",
          example: "A: My phone died in the middle of my Uber ride.\nB: That's rough. Did you just vibe in silence?",
          exampleKo: "A: 우버 타는 중간에 폰이 꺼졌어.\nB: 아이고 힘들었겠다. 그냥 조용히 분위기만 느낀 거야?",
          note:
            "상대가 안 좋은 일을 말할 때 공감하는 한 마디예요. 'I'm sorry'보다 가볍고, 'That sucks'보다 살짝 부드러워요.",
          register: "casual",
        },
        {
          id: "d01-8",
          phrase: "Good for you.",
          ko: "잘됐다. / 축하해.",
          example: "A: I quit coffee for a whole week.\nB: Good for you. I lasted about four hours.",
          exampleKo: "A: 나 일주일 동안 커피 끊었어.\nB: 잘했네. 난 네 시간 정도 버텼어.",
          note:
            "진심으로 축하할 때 써요. 단, 톤을 차갑게 하면 '잘났다'는 비꼼이 되니까 밝게 말하는 게 포인트예요.",
          register: "neutral",
        },
      ],
      roleplay: {
        setting:
          "A Friday night house party in Brooklyn. Music is loud, people are standing around the kitchen with drinks. Your friend keeps feeding you surprising news about mutual friends.",
        aiRole:
          "Maya, a 26-year-old gossip-loving graphic designer from Brooklyn. Talks fast, dramatic, loves dropping surprising stories one after another.",
        userRoleKo: "파티에서 마야 옆에 서서 소식을 듣는 친구",
        goalKo: "마야가 던지는 소식 하나하나에 오늘 배운 리액션을 5개 이상 다르게 써보기. 되묻는 질문도 한 번 해보기.",
        opener: "Okay, you will not believe this. You know Dan from work? He just quit and moved to Bali. Like, yesterday.",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 2
    // ──────────────────────────────────────────────────────────────
    {
      day: 2,
      phase: 1,
      title: "Fillers & Hesitation",
      titleKo: "필러와 뜸 들이기 — 말이 안 나올 때 시간 벌기",
      introKo:
        "네이티브도 말이 막혀요. 다만 조용히 멈추는 게 아니라 'like, you know, I mean'으로 시간을 벌죠. 오늘 배운 필러로 침묵 대신 흐름을 유지해봐요.",
      chunks: [
        {
          id: "d02-1",
          phrase: "like",
          ko: "그 뭐랄까, 약간 (말 사이에 끼우는 필러)",
          example: "A: How was the date?\nB: It was, like, fine? He talked about crypto for an hour.",
          exampleKo: "A: 데이트 어땠어?\nB: 그게, 뭐랄까, 괜찮았나? 걔가 코인 얘기를 한 시간 했어.",
          note:
            "'좋아하다'가 아니라 말 사이에 끼우는 '그, 약간'이에요. 미국 20~30대는 한 문장에 두세 번도 써요. 너무 많이 쓰면 멍청해 보이니까 한 문장에 한 번 정도만.",
          register: "casual",
        },
        {
          id: "d02-2",
          phrase: "you know",
          ko: "있잖아, 그치? (공감 유도 필러)",
          example: "A: Why'd you leave early?\nB: It was just, you know, a lot of people. I hit my limit.",
          exampleKo: "A: 왜 일찍 갔어?\nB: 그냥, 있잖아, 사람이 너무 많았어. 한계였어.",
          note:
            "상대도 알 거라는 느낌으로 던지는 필러예요. 문장 중간이나 끝에 붙여요. 끝에 붙이면 '그치?'처럼 동의를 구하는 뉘앙스가 돼요.",
          register: "casual",
        },
        {
          id: "d02-3",
          phrase: "I mean",
          ko: "아니 그러니까, 내 말은",
          example: "A: You hated the movie?\nB: I mean, it wasn't bad. I just fell asleep twice.",
          exampleKo: "A: 영화 싫었어?\nB: 아니 그러니까, 나쁘진 않았어. 그냥 두 번 잤을 뿐이야.",
          note:
            "방금 한 말을 고치거나 부드럽게 만들 때 문장 맨 앞에 붙여요. 'I mean,' 하고 살짝 쉬면 생각할 시간도 벌 수 있어요.",
          register: "casual",
        },
        {
          id: "d02-4",
          phrase: "kind of",
          ko: "약간, 좀 (애매하게 말할 때)",
          example: "A: Do you like your new roommate?\nB: Kind of. He's nice, but he hums while he eats.",
          exampleKo: "A: 새 룸메이트 괜찮아?\nB: 약간. 착한데, 먹으면서 흥얼거려.",
          note:
            "확실히 말하고 싶지 않을 때 쓰는 완충재예요. 발음은 보통 'kinda'로 뭉개져요. 단독으로 'Kind of.'라고 대답하면 '뭐, 좀?'이에요.",
          register: "casual",
        },
        {
          id: "d02-5",
          phrase: "sort of",
          ko: "뭐 그런 셈, 대충 그렇게",
          example: "A: Are you two dating?\nB: Sort of? We haven't talked about it, so don't ask.",
          exampleKo: "A: 너희 둘 사귀는 거야?\nB: 뭐 그런 셈? 얘기 안 해봐서 묻지 마.",
          note:
            "'kind of'랑 거의 같은데 살짝 더 애매하고 주저하는 느낌이에요. 발음은 'sorta'. 둘 다 입에 붙이면 돼요.",
          register: "casual",
        },
        {
          id: "d02-6",
          phrase: "well...",
          ko: "음... / 그게 말이지...",
          example: "A: Did you finish the report?\nB: Well... I opened the file. That's a start.",
          exampleKo: "A: 보고서 다 했어?\nB: 그게 말이지... 파일은 열었어. 시작은 한 거지.",
          note:
            "안 좋은 소식이나 변명 앞에 뜸 들이는 소리예요. 길게 'We-ell...' 하면 상대도 '아, 뭔가 있구나' 하고 준비해요.",
          register: "neutral",
        },
        {
          id: "d02-7",
          phrase: "the thing is",
          ko: "근데 문제는, 그게 뭐냐면",
          example: "A: Just come to the gym with me.\nB: The thing is, I don't own a single pair of sneakers.",
          exampleKo: "A: 그냥 나랑 헬스장 가자.\nB: 근데 문제는, 나 운동화가 한 켤레도 없어.",
          note:
            "핵심 이유나 반전을 꺼내기 전에 붙이는 말이에요. 'the thing is,' 하고 한 박자 쉬면 상대가 집중해서 들어요.",
          register: "neutral",
        },
        {
          id: "d02-8",
          phrase: "let me think",
          ko: "잠깐만, 생각 좀 해볼게",
          example: "A: What's your favorite restaurant in town?\nB: Let me think... honestly, the taco truck by the gas station.",
          exampleKo: "A: 이 동네에서 제일 좋아하는 식당이 어디야?\nB: 잠깐 생각 좀... 솔직히 주유소 옆 타코 트럭.",
          note:
            "대답이 바로 안 나올 때 침묵 대신 이걸 말하세요. 'Hmm, let me think'까지 하면 완전 자연스러워요.",
          register: "neutral",
        },
      ],
      roleplay: {
        setting:
          "A casual video call with a friend on a Sunday afternoon. You're both lying on your couches, half-watching TV. The friend keeps asking you slightly awkward questions about your love life and job.",
        aiRole:
          "Tyler, a laid-back 29-year-old from Portland who asks nosy questions but in a friendly way. Speaks slowly, uses lots of 'dude' and 'honestly'.",
        userRoleKo: "타일러의 오래된 친구, 질문마다 바로 대답이 안 나오는 상황",
        goalKo: "질문마다 바로 대답하지 말고 오늘 배운 필러를 먼저 끼워서 시간을 벌어보기. 필러 5종 이상 사용.",
        opener: "Dude, okay, real question. Are you actually happy at your job, or are you just, like, surviving?",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 3
    // ──────────────────────────────────────────────────────────────
    {
      day: 3,
      phase: 1,
      title: "Greetings Beyond \"How are you\"",
      titleKo: "'How are you' 말고 — 진짜 인사와 대답",
      introKo:
        "'How are you? I'm fine, thank you'는 교과서에만 있어요. 실제로는 'What's up?'에 'Not much'로 받아치고 바로 수다로 넘어가요. 오늘은 인사의 리듬을 배워요.",
      chunks: [
        {
          id: "d03-1",
          phrase: "What's up?",
          ko: "뭐해? / 별일 없지? (인사)",
          example: "A: Hey, what's up?\nB: Nothing, just hiding from my inbox.",
          exampleKo: "A: 야, 별일 없지?\nB: 응, 그냥 메일함 피해 숨는 중.",
          note:
            "진짜 '무슨 일이야?'가 아니라 그냥 인사예요. 'Nothing', 'Not much'로 받고 바로 다른 얘기로 넘어가면 돼요. 발음은 'Wassup', 'Sup'.",
          register: "casual",
        },
        {
          id: "d03-2",
          phrase: "How's it going?",
          ko: "잘 지내? / 어떻게 지내?",
          example: "A: How's it going?\nB: Pretty good. Survived Monday, so I'm basically a hero.",
          exampleKo: "A: 잘 지내?\nB: 괜찮아. 월요일을 살아남았으니 사실상 영웅이지.",
          note:
            "'How are you'의 캐주얼 버전이에요. 대답은 'Good', 'Pretty good', 'Not bad' 정도로 짧게. 길게 설명하면 어색해요.",
          register: "casual",
        },
        {
          id: "d03-3",
          phrase: "What have you been up to?",
          ko: "요즘 뭐하고 지내?",
          example: "A: What have you been up to?\nB: Mostly working and watching cooking shows I'll never cook from.",
          exampleKo: "A: 요즘 뭐하고 지내?\nB: 주로 일하고, 절대 따라 안 만들 요리 프로 보고.",
          note:
            "오랜만에 만났을 때 쓰는 질문이에요. 'been up to'는 '뭘 하며 지냈는지'라는 덩어리로 외우세요. 발음은 'What've you been up to'로 뭉개져요.",
          register: "casual",
        },
        {
          id: "d03-4",
          phrase: "Not much.",
          ko: "별거 없어. / 그냥 그래.",
          example: "A: What's new with you?\nB: Not much. My plant died, but that's about it.",
          exampleKo: "A: 요즘 새로운 거 있어?\nB: 별거 없어. 화분이 죽긴 했는데, 그 정도.",
          note:
            "'What's up?', 'What's new?'에 대한 국민 대답이에요. 그 뒤에 작은 얘깃거리 하나 붙이면 대화가 이어져요.",
          register: "casual",
        },
        {
          id: "d03-5",
          phrase: "Long time no see.",
          ko: "오랜만이야!",
          example: "A: Long time no see! You look different.\nB: I got a haircut. Three months ago.",
          exampleKo: "A: 오랜만이야! 뭔가 달라졌네.\nB: 머리 잘랐어. 세 달 전에.",
          note:
            "문법적으로 이상하지만 모두가 쓰는 표현이에요. 우연히 마주쳤을 때 손 흔들면서 쓰면 딱이에요.",
          register: "casual",
        },
        {
          id: "d03-6",
          phrase: "How've you been?",
          ko: "그동안 잘 지냈어?",
          example: "A: How've you been?\nB: Honestly? Tired. But in a good way, I think.",
          exampleKo: "A: 그동안 잘 지냈어?\nB: 솔직히? 피곤해. 근데 좋은 쪽으로, 아마.",
          note:
            "오랜만에 보는 사람한테만 써요. 매일 보는 사람한테 쓰면 이상해요. 'How are you'보다 '그동안'이라는 시간 느낌이 들어가요.",
          register: "neutral",
        },
        {
          id: "d03-7",
          phrase: "Can't complain.",
          ko: "뭐, 나쁘지 않아. / 그럭저럭.",
          example: "A: How's life?\nB: Can't complain. Well, I could, but nobody would listen.",
          exampleKo: "A: 요즘 어때?\nB: 나쁘지 않아. 뭐, 불평할 순 있지만 아무도 안 들어줄 거야.",
          note:
            "'좋다'고 하기엔 애매하고 '나쁘다'고 하기엔 그렇고, 그럴 때 딱이에요. 살짝 유머러스하고 겸손한 느낌이에요.",
          register: "casual",
        },
        {
          id: "d03-8",
          phrase: "Catch you later.",
          ko: "나중에 보자. / 이따 봐.",
          example: "A: I gotta run. Catch you later!\nB: Later! Don't forget my charger.",
          exampleKo: "A: 나 가야 돼. 나중에 봐!\nB: 봐! 내 충전기 잊지 말고.",
          note:
            "'Goodbye'는 거의 안 써요. 'Catch you later', 'See ya', 'Later'가 실제 작별 인사예요. 가볍게 던지고 뒤돌면 돼요.",
          register: "casual",
        },
      ],
      roleplay: {
        setting:
          "A Saturday morning farmers market. You bump into an old college acquaintance you haven't seen in about two years near the coffee stand. It's a quick, friendly catch-up.",
        aiRole:
          "Jordan, a 28-year-old you knew in college, now a nurse. Warm, a bit talkative, asks a lot of follow-up questions.",
        userRoleKo: "조던을 2년 만에 우연히 마주친 대학 동창",
        goalKo: "인사 → 근황 주고받기 → 자연스럽게 작별까지. 오늘 배운 인사/대답 표현 4개 이상 쓰고, 상대 근황도 되묻기.",
        opener: "Wait, oh my gosh, is that you? Long time no see! What have you been up to?",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 4
    // ──────────────────────────────────────────────────────────────
    {
      day: 4,
      phase: 1,
      title: "Making Plans",
      titleKo: "약속 잡기 — 제안하고, 콜 하고, 시간 맞추기",
      introKo:
        "친구 사귀는 건 결국 '같이 뭐 할래?'에서 시작해요. 오늘은 제안하고, 받아치고, 시간 조율하는 덩어리를 통째로 외워요. 'I'm down' 하나면 반은 끝.",
      chunks: [
        {
          id: "d04-1",
          phrase: "I'm down.",
          ko: "나 좋아, 콜!",
          example: "A: Karaoke tonight?\nB: I'm down. But I'm only singing Disney songs.",
          exampleKo: "A: 오늘 밤 노래방?\nB: 콜! 근데 나 디즈니 노래만 부를 거야.",
          note:
            "'아래에 있다'가 아니라 '나 찬성, 같이 할래'예요. 제안 받았을 때 제일 많이 쓰는 대답이에요. 'I'm down for that'도 같은 뜻이에요.",
          register: "casual",
        },
        {
          id: "d04-2",
          phrase: "Wanna grab ...?",
          ko: "~ 먹으러 갈래? / ~ 하러 갈래?",
          example: "A: Wanna grab lunch? I know a place with huge burritos.\nB: Say less. I'm already standing up.",
          exampleKo: "A: 점심 먹으러 갈래? 부리또 엄청 큰 데 알아.\nB: 더 말할 필요 없어. 나 벌써 일어섰어.",
          note:
            "'grab'은 '빨리 가볍게 먹다/마시다'예요. 'grab coffee', 'grab a bite', 'grab a drink'로 통째로 쓰세요. 'eat'보다 훨씬 자연스러워요.",
          register: "casual",
        },
        {
          id: "d04-3",
          phrase: "Let's hang out.",
          ko: "우리 놀자. / 같이 시간 보내자.",
          example: "A: Let's hang out this week. I miss your face.\nB: Aw. Thursday? I'll bring snacks.",
          exampleKo: "A: 이번 주에 놀자. 네 얼굴 보고 싶어.\nB: 아 귀여워. 목요일? 내가 과자 들고 갈게.",
          note:
            "'hang out'은 특별한 계획 없이 그냥 같이 시간 보내는 거예요. 'Let's play'는 애들 말이니까 어른은 무조건 'hang out'.",
          register: "casual",
        },
        {
          id: "d04-4",
          phrase: "I'm in.",
          ko: "나도 할래. / 나도 끼워줘.",
          example: "A: We're doing a road trip to the coast next month.\nB: I'm in. I call shotgun for the whole trip.",
          exampleKo: "A: 다음 달에 해안으로 로드트립 갈 거야.\nB: 나도 할래. 트립 내내 조수석은 내 거.",
          note:
            "'I'm down'이랑 비슷한데 'I'm in'은 '참여하겠다'는 결정 느낌이 더 강해요. 반대는 'I'm out'이에요.",
          register: "casual",
        },
        {
          id: "d04-5",
          phrase: "Does ... work for you?",
          ko: "~ 괜찮아? (시간/장소 물을 때)",
          example: "A: Does Friday at 7 work for you?\nB: Friday works. Just not that sushi place again.",
          exampleKo: "A: 금요일 7시 괜찮아?\nB: 금요일 좋아. 그 스시집만 아니면.",
          note:
            "시간 조율의 국민 표현이에요. 'Is it okay?'보다 훨씬 자연스러워요. 대답은 'That works' 또는 'Doesn't work for me'.",
          register: "neutral",
        },
        {
          id: "d04-6",
          phrase: "What are you up to this weekend?",
          ko: "이번 주말에 뭐 해?",
          example: "A: What are you up to this weekend?\nB: Nothing yet. Why, are you about to ruin my sleep plans?",
          exampleKo: "A: 이번 주말에 뭐 해?\nB: 아직 아무것도. 왜, 내 잠 계획 망치려고?",
          note:
            "약속 잡기 전에 던지는 탐색 질문이에요. 'What are you doing'보다 'up to'가 더 네이티브스러워요. 'What are you up to tonight?'로 응용 가능.",
          register: "casual",
        },
        {
          id: "d04-7",
          phrase: "Let's play it by ear.",
          ko: "일단 그때 가서 보자.",
          example: "A: Should we book a table?\nB: Let's play it by ear. Half of us always cancel anyway.",
          exampleKo: "A: 테이블 예약할까?\nB: 그때 가서 보자. 어차피 절반은 늘 취소하잖아.",
          note:
            "계획을 딱 정하지 않고 상황 봐서 하자는 뜻이에요. 미국인들 약속 절반은 이렇게 잡혀요. 정확한 시간 안 정하고 싶을 때 쓰세요.",
          register: "casual",
        },
        {
          id: "d04-8",
          phrase: "Sounds like a plan.",
          ko: "좋아, 그렇게 하자.",
          example: "A: Movie at mine, then tacos after?\nB: Sounds like a plan. I'll bring the bad jokes.",
          exampleKo: "A: 우리 집에서 영화 보고 그다음 타코?\nB: 좋아 그렇게 하자. 썰렁한 농담은 내가 챙길게.",
          note:
            "계획을 마무리 짓는 한 마디예요. 'Okay'만 하면 밋밋한데 이걸 쓰면 '좋아, 확정!' 느낌이 나요. 'Sounds good'도 같은 용도.",
          register: "casual",
        },
      ],
      roleplay: {
        setting:
          "A group chat turned phone call on a Wednesday evening. Your coworker-turned-friend wants to do something this weekend but is terrible at deciding. You need to pin down an actual plan.",
        aiRole:
          "Sam, a 30-year-old indecisive but enthusiastic coworker from Chicago. Suggests three things at once, changes their mind, loves food.",
        userRoleKo: "샘과 주말 약속을 잡으려는 친구",
        goalKo: "오늘 표현 4개 이상 쓰면서 주말 약속을 구체적으로(요일+시간+장소) 확정하기. 상대 제안 중 하나는 다른 걸로 바꿔보기.",
        opener: "Okay so this weekend. Are we doing brunch, hiking, or that new arcade bar? Or all three? What are you up to?",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 5
    // ──────────────────────────────────────────────────────────────
    {
      day: 5,
      phase: 1,
      title: "Saying No Softly",
      titleKo: "부드럽게 거절하기 — 기분 안 상하게 빠지기",
      introKo:
        "'No'라고 딱 잘라 말하면 분위기가 싸해져요. 미국인들은 'I'm good', 'Maybe next time'처럼 부드럽게 빠져나가요. 오늘은 거절해도 관계가 안 깨지는 말을 배워요.",
      chunks: [
        {
          id: "d05-1",
          phrase: "I'll pass.",
          ko: "난 패스할게. / 난 빼줘.",
          example: "A: Want to try my kimchi smoothie?\nB: I'll pass. I like my stomach where it is.",
          exampleKo: "A: 내 김치 스무디 마셔볼래?\nB: 난 패스. 내 위장은 제자리에 있는 게 좋아.",
          note:
            "가볍고 깔끔한 거절이에요. 'No, thank you'보다 캐주얼하고, 'Hard pass'라고 하면 '절대 싫어'로 강해져요.",
          register: "casual",
        },
        {
          id: "d05-2",
          phrase: "I'm good.",
          ko: "난 괜찮아. (= 안 할래, 됐어)",
          example: "A: Want another slice?\nB: I'm good. I've had four and I'm not proud.",
          exampleKo: "A: 한 조각 더 먹을래?\nB: 난 됐어. 네 조각 먹었고 자랑스럽진 않아.",
          note:
            "'난 좋아'가 아니라 거절할 때 쓰는 말이에요. 직원이 더 필요하냐고 물을 때 손 살짝 들면서 'I'm good'. 'I'm good, thanks'까지 하면 완벽.",
          register: "casual",
        },
        {
          id: "d05-3",
          phrase: "Maybe next time.",
          ko: "다음에 할게. / 다음 기회에.",
          example: "A: Coming to trivia night?\nB: Maybe next time. Tonight I'm dating my couch.",
          exampleKo: "A: 퀴즈 나이트 올 거야?\nB: 다음에 갈게. 오늘 밤은 소파랑 데이트야.",
          note:
            "거절인데 문을 살짝 열어두는 표현이에요. 진짜 다음에 갈 생각이 없어도 많이들 써요. 예의상 거절의 정석.",
          register: "casual",
        },
        {
          id: "d05-4",
          phrase: "Rain check?",
          ko: "다음으로 미루면 안 될까?",
          example: "A: Still on for dinner tonight?\nB: Rain check? My boss just dropped a 6 p.m. meeting on me.",
          exampleKo: "A: 오늘 저녁 약속 그대로지?\nB: 다음으로 미루면 안 될까? 상사가 방금 6시 회의를 던졌어.",
          note:
            "원래 비 와서 경기 취소되면 주던 재입장권에서 왔어요. '이번엔 못 가지만 꼭 다시 하자'는 뜻이에요. 'Can I take a rain check?'가 풀 버전.",
          register: "casual",
        },
        {
          id: "d05-5",
          phrase: "I'm not feeling it.",
          ko: "별로 안 땡겨. / 그럴 기분 아니야.",
          example: "A: Club tonight?\nB: I'm not feeling it. My feet are still mad about last Saturday.",
          exampleKo: "A: 오늘 밤 클럽?\nB: 별로 안 땡겨. 내 발이 아직 지난 토요일에 화나 있어.",
          note:
            "이유 없이 그냥 내키지 않을 때 쓰는 말이에요. 친한 사이에선 이게 제일 솔직하고 자연스러운 거절이에요.",
          register: "casual",
        },
        {
          id: "d05-6",
          phrase: "I wish I could.",
          ko: "진짜 가고 싶은데 (못 가).",
          example: "A: My band's playing Thursday. Come!\nB: I wish I could. I'm on a flight at 6 a.m. the next day.",
          exampleKo: "A: 목요일에 우리 밴드 공연해. 와!\nB: 진짜 가고 싶은데. 다음 날 아침 6시 비행기야.",
          note:
            "'못 간다'를 아쉬움으로 포장하는 거절이에요. 뒤에 이유를 붙이면 더 진심처럼 들려요. 'I wish I could, but...'",
          register: "neutral",
        },
        {
          id: "d05-7",
          phrase: "I'm gonna sit this one out.",
          ko: "이번엔 빠질게.",
          example: "A: We're doing a 10K run on Sunday!\nB: I'm gonna sit this one out. Running is for people being chased.",
          exampleKo: "A: 일요일에 10K 달리기 할 거야!\nB: 이번엔 빠질게. 달리기는 쫓기는 사람들이나 하는 거야.",
          note:
            "경기에서 벤치에 앉는 데서 온 표현이에요. 그룹 활동에서 나만 빠질 때 딱이에요. 'this one'이 '이번 건'이라는 뜻.",
          register: "casual",
        },
        {
          id: "d05-8",
          phrase: "Not tonight.",
          ko: "오늘 밤은 안 돼.",
          example: "A: Drinks after work?\nB: Not tonight. I have a date with laundry.",
          exampleKo: "A: 퇴근하고 한잔?\nB: 오늘은 안 돼. 빨래랑 약속 있어.",
          note:
            "짧고 분명하지만 차갑지 않아요. 'tonight' 대신 'today', 'this week'로 바꿔 쓰면 돼요. 뒤에 가벼운 이유 하나 붙이면 더 좋아요.",
          register: "casual",
        },
      ],
      roleplay: {
        setting:
          "Thursday afternoon at the office kitchen. A very persistent, very social coworker is recruiting people for a bunch of after-work activities this week and next. You want to say no to most of it without being rude.",
        aiRole:
          "Priya, a 27-year-old super-social marketing coordinator who organizes everything. Cheerful, pushy in a nice way, never takes the first no.",
        userRoleKo: "프리야의 권유를 계속 받는 동료",
        goalKo: "프리야의 제안을 최소 4번 서로 다른 표현으로 부드럽게 거절하기. 마지막엔 하나는 수락해서 분위기 살리기.",
        opener: "Hey! Perfect timing. So we're doing trivia tonight, karaoke tomorrow, and a hike Saturday. You're coming to all of them, right?",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 6
    // ──────────────────────────────────────────────────────────────
    {
      day: 6,
      phase: 1,
      title: "Food & Ordering",
      titleKo: "음식과 주문 — 식당에서 당황하지 않기",
      introKo:
        "식당 주문은 가장 자주 마주치는 회화예요. 'I want'가 아니라 'Can I get'으로 시작하면 바로 현지인 느낌이 나요. 오늘은 배고플 때부터 배부를 때까지 전부 커버해요.",
      chunks: [
        {
          id: "d06-1",
          phrase: "I'll have ...",
          ko: "~로 할게요. (주문)",
          example: "A: What can I get you?\nB: I'll have the pancakes. And a side of bacon, for emotional support.",
          exampleKo: "A: 뭐 드릴까요?\nB: 팬케이크로 할게요. 그리고 베이컨 사이드도, 정서적 지지용으로요.",
          note:
            "식당에서 제일 표준적인 주문 표현이에요. 'I want'는 좀 애 같고, 'I'll have'는 딱 어른스러워요. 뒤에 메뉴 이름만 붙이면 끝.",
          register: "neutral",
        },
        {
          id: "d06-2",
          phrase: "Can I get ...?",
          ko: "~ 주실 수 있어요? / ~ 주세요.",
          example: "A: Can I get an iced latte with oat milk?\nB: Sure. Name for the order?",
          exampleKo: "A: 오트밀크 아이스 라떼 하나 주세요.\nB: 네. 주문 이름은요?",
          note:
            "카페, 패스트푸드에서 제일 많이 들리는 주문이에요. 'Can I get'이 'May I have'보다 훨씬 자연스러워요. 'Could I get'은 조금 더 공손.",
          register: "casual",
        },
        {
          id: "d06-3",
          phrase: "For here or to go?",
          ko: "드시고 가세요, 포장이세요?",
          example: "A: For here or to go?\nB: To go. I'm eating this in my car like a raccoon.",
          exampleKo: "A: 드시고 가세요, 포장이세요?\nB: 포장이요. 차에서 너구리처럼 먹을 거예요.",
          note:
            "직원이 꼭 물어보는 질문이에요. 대답은 'For here' 또는 'To go' 두 단어면 끝. 'Take out'이라고 해도 알아듣지만 'to go'가 더 미국식이에요.",
          register: "neutral",
        },
        {
          id: "d06-4",
          phrase: "That hits the spot.",
          ko: "캬, 딱 이거야. / 속이 다 풀리네.",
          example: "A: How's the ramen?\nB: That hits the spot. I feel like a new person.",
          exampleKo: "A: 라멘 어때?\nB: 캬 딱 이거야. 새 사람 된 기분이야.",
          note:
            "먹고 싶던 걸 딱 먹었을 때, 특히 배고프거나 숙취일 때 쓰는 말이에요. 첫 입 먹고 눈 감으면서 말하면 완벽해요.",
          register: "casual",
        },
        {
          id: "d06-5",
          phrase: "I'm starving.",
          ko: "배고파 죽겠어.",
          example: "A: I'm starving. I skipped lunch for a meeting about lunch.\nB: That's the saddest sentence I've ever heard.",
          exampleKo: "A: 배고파 죽겠어. 점심 관련 회의 때문에 점심을 걸렀어.\nB: 내가 들어본 가장 슬픈 문장이야.",
          note:
            "'I'm hungry'는 밋밋하고, 'I'm starving'이 진짜 입에서 나오는 말이에요. 'I could eat a horse'까지 가면 좀 옛날 사람 느낌.",
          register: "casual",
        },
        {
          id: "d06-6",
          phrase: "What do you recommend?",
          ko: "뭐가 맛있어요? / 추천해주세요.",
          example: "A: What do you recommend?\nB: The fish tacos. People cry a little, in a good way.",
          exampleKo: "A: 뭐가 맛있어요?\nB: 피시 타코요. 사람들이 좀 울어요, 좋은 의미로.",
          note:
            "메뉴를 모를 때 직원한테 던지는 만능 질문이에요. 'What's good here?'라고 하면 더 캐주얼해요. 직원 추천 받으면 대화도 자연스럽게 열려요.",
          register: "neutral",
        },
        {
          id: "d06-7",
          phrase: "I could go for ...",
          ko: "~ 땡긴다. / ~ 먹고 싶다.",
          example: "A: What should we eat?\nB: I could go for pizza. Or anything that isn't my own cooking.",
          exampleKo: "A: 뭐 먹을까?\nB: 피자 땡긴다. 아니면 내가 안 만든 거면 아무거나.",
          note:
            "'I want'보다 부드럽게 '~ 괜찮을 것 같은데'라는 느낌이에요. 메뉴 정할 때 제안으로 쓰면 자연스러워요.",
          register: "casual",
        },
        {
          id: "d06-8",
          phrase: "I'm stuffed.",
          ko: "배 터지겠어. / 완전 배불러.",
          example: "A: Dessert?\nB: I'm stuffed. If I eat one more bite, I'll need a nurse.",
          exampleKo: "A: 디저트?\nB: 배 터지겠어. 한 입만 더 먹으면 간호사 불러야 돼.",
          note:
            "'I'm full'보다 더 '꽉 찼다'는 느낌이에요. 배 두드리면서 말하면 네이티브 그 자체. 'I'm so full'도 괜찮아요.",
          register: "casual",
        },
      ],
      roleplay: {
        setting:
          "A busy brunch spot in Los Angeles on Sunday at noon. There's a line out the door, the menu is huge, and the server is friendly but fast. You're hungry and a little overwhelmed.",
        aiRole:
          "Marcus, a 25-year-old upbeat server who loves recommending dishes and making jokes. Talks quickly, very friendly, calls everyone 'my friend'.",
        userRoleKo: "처음 온 브런치 식당에서 주문하는 손님",
        goalKo: "추천 받기 → 주문하기 → 포장/매장 답하기 → 먹고 나서 리액션까지. 오늘 표현 4개 이상 쓰기.",
        opener: "Hey, welcome in, my friend! First time here? Do you know what you want, or want me to throw some recommendations at you?",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 7
    // ──────────────────────────────────────────────────────────────
    {
      day: 7,
      phase: 1,
      title: "Agreeing & Disagreeing",
      titleKo: "동의와 반대 — 'Yes/No' 말고 진짜 맞장구",
      introKo:
        "'Yes', 'No'만 하면 로봇 같아요. 'Totally', 'Not really', 'Fair enough'처럼 온도 차이가 있는 표현을 쓰면 대화에 생기가 돌아요. 오늘은 그 온도를 배워요.",
      chunks: [
        {
          id: "d07-1",
          phrase: "Totally.",
          ko: "완전. / 진짜 그래.",
          example: "A: Mondays should be illegal.\nB: Totally. I'd vote for that.",
          exampleKo: "A: 월요일은 불법이어야 돼.\nB: 완전. 나 거기 투표할게.",
          note:
            "'Yes'의 열정 버전이에요. 짧게 'Totally'만 던져도 되고, 'Totally agree'로 늘려도 돼요. 발음은 'Toe-dully'처럼 t가 d로 뭉개져요.",
          register: "casual",
        },
        {
          id: "d07-2",
          phrase: "I'm with you.",
          ko: "나도 같은 생각이야. / 네 편이야.",
          example: "A: I think we should just order in tonight.\nB: I'm with you. Cooking is a scam.",
          exampleKo: "A: 오늘 밤은 그냥 배달 시키자.\nB: 나도 같은 생각이야. 요리는 사기야.",
          note:
            "'너랑 같이 있다'가 아니라 '네 의견에 동의한다'는 뜻이에요. 'I'm with you on that'으로 늘리면 더 자연스러워요.",
          register: "casual",
        },
        {
          id: "d07-3",
          phrase: "Not really.",
          ko: "별로. / 딱히 그렇진 않아.",
          example: "A: Did you like the new season?\nB: Not really. They killed off the only character I cared about.",
          exampleKo: "A: 새 시즌 재밌었어?\nB: 별로. 내가 유일하게 좋아하던 캐릭터를 죽였어.",
          note:
            "'No'를 부드럽게 만든 거예요. 'No'는 딱 잘라 말하는 느낌이고, 'Not really'는 '글쎄, 별로'예요. 거의 모든 'No' 자리에 쓸 수 있어요.",
          register: "casual",
        },
        {
          id: "d07-4",
          phrase: "I don't buy it.",
          ko: "난 안 믿어. / 그거 아닌 것 같은데.",
          example: "A: He says he was late because of a parade.\nB: I don't buy it. There's no parade on a Tuesday.",
          exampleKo: "A: 걔가 퍼레이드 때문에 늦었대.\nB: 안 믿어. 화요일에 무슨 퍼레이드야.",
          note:
            "'사다'가 아니라 '믿다'예요. 누가 변명하거나 이상한 주장을 할 때 '그거 안 사(믿어)'라는 느낌으로 써요.",
          register: "casual",
        },
        {
          id: "d07-5",
          phrase: "Fair enough.",
          ko: "뭐, 그렇다면 인정. / 그건 그래.",
          example: "A: I'm not coming. It's 30 degrees and I'm not a penguin.\nB: Fair enough. Stay warm.",
          exampleKo: "A: 안 갈래. 영하인데 난 펭귄이 아니야.\nB: 그건 그래. 따뜻하게 있어.",
          note:
            "완전 동의는 아니지만 '네 말에 일리는 있다'는 뜻이에요. 논쟁을 부드럽게 끝낼 때 최고예요. 어깨 살짝 으쓱하면서 말해요.",
          register: "casual",
        },
        {
          id: "d07-6",
          phrase: "Tell me about it.",
          ko: "내 말이. / 말도 마.",
          example: "A: Rent in this city is insane.\nB: Tell me about it. I pay $1,800 for a closet with a window.",
          exampleKo: "A: 이 도시 월세 미쳤어.\nB: 말도 마. 난 창문 달린 벽장에 1,800달러 내.",
          note:
            "'그것에 대해 말해줘'가 아니에요! 상대의 불평에 '나도 완전 겪어봤어'라고 강하게 공감하는 말이에요. 진짜로 설명을 듣고 싶으면 'What happened?'를 쓰세요.",
          register: "casual",
        },
        {
          id: "d07-7",
          phrase: "I'm not so sure.",
          ko: "글쎄, 난 잘 모르겠는데.",
          example: "A: This haircut makes me look like a CEO.\nB: I'm not so sure. More like a CEO's nephew.",
          exampleKo: "A: 이 머리 하니까 CEO 같지.\nB: 글쎄, 잘 모르겠는데. CEO 조카 정도?",
          note:
            "'틀렸어'라고 하기엔 세고, 그래도 동의는 못 하겠을 때 쓰는 부드러운 반대예요. 'I'm not sure about that'도 같은 용도.",
          register: "neutral",
        },
        {
          id: "d07-8",
          phrase: "I see where you're coming from.",
          ko: "네 입장은 이해해. / 무슨 말인지는 알겠어.",
          example: "A: I just think we should've taken the earlier flight.\nB: I see where you're coming from. But the earlier flight was 5 a.m.",
          exampleKo: "A: 난 그냥 더 이른 비행기를 탔어야 했다고 봐.\nB: 네 입장은 이해해. 근데 그게 새벽 5시였잖아.",
          note:
            "반대하기 전에 '네 생각도 이해는 해'라고 깔아주는 표현이에요. 이거 하나 붙이면 반대해도 싸움이 안 나요. 뒤에 'but'이 거의 항상 따라와요.",
          register: "neutral",
        },
      ],
      roleplay: {
        setting:
          "A late-night diner after a movie with a friend. You both just watched a very hyped new film and have strong, slightly different opinions about it. Fries are on the table.",
        aiRole:
          "Chris, a 31-year-old opinionated film nerd from Seattle. Confident, loves a friendly debate, makes bold claims to see if you'll push back.",
        userRoleKo: "크리스와 영화 감상을 나누는 친구",
        goalKo: "크리스의 의견에 동의 3번, 반대 3번을 각각 다른 표현으로 하기. 반대할 땐 이유 한 줄 붙이기.",
        opener: "Okay, be honest. That was the best movie of the year, right? The ending alone. Tell me I'm wrong.",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 8
    // ──────────────────────────────────────────────────────────────
    {
      day: 8,
      phase: 1,
      title: "Asking for Clarification",
      titleKo: "되묻기 — 못 알아들었을 때 당황하지 않기",
      introKo:
        "못 알아들었는데 'Yes'라고 고개 끄덕이는 거, 제일 위험해요. 네이티브도 하루에 열 번은 'Wait, what?' 해요. 오늘은 당당하게 되묻는 법을 배워요.",
      chunks: [
        {
          id: "d08-1",
          phrase: "What do you mean?",
          ko: "무슨 말이야? / 그게 무슨 뜻이야?",
          example: "A: I think we need to talk about the fridge.\nB: What do you mean? Is this about my yogurt?",
          exampleKo: "A: 우리 냉장고 얘기 좀 해야 할 것 같아.\nB: 무슨 말이야? 내 요거트 때문이야?",
          note:
            "상대 말이 애매할 때 제일 기본 되묻기예요. 'What do you mean by that?'까지 하면 '그게 정확히 무슨 뜻이야'가 돼요.",
          register: "neutral",
        },
        {
          id: "d08-2",
          phrase: "Wait, what?",
          ko: "잠깐, 뭐라고?",
          example: "A: So I'm moving to Japan next week.\nB: Wait, what? You told me this yesterday? No you didn't.",
          exampleKo: "A: 그래서 나 다음 주에 일본으로 이사 가.\nB: 잠깐, 뭐라고? 어제 말했다고? 안 했잖아.",
          note:
            "놀라서 되묻는 거예요. 못 알아들었을 때도 쓰지만, '방금 뭔가 충격적인 말 했지?' 할 때 더 많이 써요. 'Wait'에서 멈췄다가 'what?'을 올려요.",
          register: "casual",
        },
        {
          id: "d08-3",
          phrase: "Say that again?",
          ko: "다시 한 번 말해줄래?",
          example: "A: The Wi-Fi password is capital-G, seven, lowercase-x, dollar sign...\nB: Say that again? Slower. I have a crayon.",
          exampleKo: "A: 와이파이 비번은 대문자 G, 7, 소문자 x, 달러 표시...\nB: 다시 말해줄래? 천천히. 나 크레용 들고 있어.",
          note:
            "'Pardon?'은 너무 격식적이에요. 친구나 직원한테는 'Say that again?' 또는 'Sorry, what?'가 자연스러워요. 끝을 올려서 질문처럼.",
          register: "casual",
        },
        {
          id: "d08-4",
          phrase: "I didn't catch that.",
          ko: "못 들었어. / 못 알아들었어.",
          example: "A: ...and that's why we're banned from the bowling alley.\nB: Sorry, I didn't catch that. Banned from where?",
          exampleKo: "A: ...그래서 우리가 볼링장에서 출입 금지된 거야.\nB: 미안, 못 들었어. 어디서 출입 금지?",
          note:
            "'catch'는 '잡다'인데 여기선 '알아듣다'예요. 시끄럽거나 빨라서 놓쳤을 때 제일 자연스러운 표현이에요. 'I didn't get that'도 비슷해요.",
          register: "neutral",
        },
        {
          id: "d08-5",
          phrase: "Can you slow down?",
          ko: "천천히 말해줄 수 있어?",
          example: "A: SoIwenttothestoreandthenthecarand...\nB: Can you slow down? I'm getting one word out of every five.",
          exampleKo: "A: 그래서가게갔는데차가그래서...\nB: 천천히 말해줄래? 다섯 단어 중 하나만 들려.",
          note:
            "빨라서 못 알아들을 때 솔직하게 쓰세요. 미국인들은 이걸 전혀 무례하다고 안 느껴요. 'a little' 붙여서 'Can you slow down a little?'도 좋아요.",
          register: "neutral",
        },
        {
          id: "d08-6",
          phrase: "You lost me.",
          ko: "나 놓쳤어. / 이해 못 따라갔어.",
          example: "A: So the blockchain validates the... are you following?\nB: You lost me at 'blockchain'.",
          exampleKo: "A: 그래서 블록체인이 검증을... 따라오고 있어?\nB: '블록체인'에서 놓쳤어.",
          note:
            "설명이 길어져서 중간에 놓쳤을 때 써요. 'You lost me at ...'로 어디서부터 놓쳤는지 말하면 재밌고 자연스러워요.",
          register: "casual",
        },
        {
          id: "d08-7",
          phrase: "Come again?",
          ko: "응? 뭐라고?",
          example: "A: I'm thinking of getting a pet snake.\nB: Come again? A snake? In this apartment?",
          exampleKo: "A: 나 뱀 키울까 생각 중이야.\nB: 응? 뭐라고? 뱀? 이 아파트에서?",
          note:
            "'다시 와'가 아니라 '뭐라고?'예요. 못 들었을 때도 쓰고, '너 지금 뭐라고 했어?' 하고 놀랄 때도 써요. 살짝 유머러스한 느낌.",
          register: "casual",
        },
        {
          id: "d08-8",
          phrase: "What's ... mean?",
          ko: "~가 무슨 뜻이야?",
          example: "A: He totally ghosted me.\nB: What's 'ghosted' mean? Like, dressed as a ghost?",
          exampleKo: "A: 걔가 나한테 완전 잠수 탔어.\nB: 'ghosted'가 무슨 뜻이야? 유령 분장했다는 거야?",
          note:
            "문법적으론 'What does ... mean?'인데 실제로는 'What's ... mean?'으로 뭉개서 말해요. 모르는 단어 나오면 바로 이걸로 물어보세요.",
          register: "casual",
        },
      ],
      roleplay: {
        setting:
          "A crowded, loud brewery on a Friday night. A new acquaintance is explaining their very complicated job and a long story about their weekend, using slang and speaking fast. You can barely hear.",
        aiRole:
          "Devin, a 29-year-old fast-talking software engineer from Austin. Uses tech jargon and slang, tells rambling stories, friendly but hard to follow.",
        userRoleKo: "시끄러운 바에서 데빈의 이야기를 들으려 애쓰는 새 친구",
        goalKo: "못 알아들을 때마다 오늘 배운 되묻기 표현을 5개 이상 돌려가며 쓰기. 모르는 단어는 뜻을 직접 물어보기.",
        opener: "So basically I do backend infra for a fintech startup, and last weekend was absolutely unhinged, okay, so my buddy Kyle...",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 9
    // ──────────────────────────────────────────────────────────────
    {
      day: 9,
      phase: 1,
      title: "Talking About Your Day",
      titleKo: "하루 얘기하기 — '오늘 어땠어?'에 진짜처럼 답하기",
      introKo:
        "'How was your day?'는 매일 듣는 질문인데 'Good'으로 끝나면 대화가 죽어요. 오늘은 그 질문에 두 문장으로 자연스럽게 답하는 패턴을 익혀요.",
      chunks: [
        {
          id: "d09-1",
          phrase: "It was a long day.",
          ko: "오늘 하루 길었어. / 힘든 하루였어.",
          example: "A: You look dead.\nB: It was a long day. Three meetings that should've been emails.",
          exampleKo: "A: 너 완전 죽은 얼굴이야.\nB: 오늘 하루 길었어. 이메일로 끝날 회의를 세 번이나 했어.",
          note:
            "'힘들었다'는 말을 직접 안 하고 '길었다'로 표현하는 게 미국식이에요. 한숨 한 번 쉬고 말하면 완벽해요.",
          register: "casual",
        },
        {
          id: "d09-2",
          phrase: "Nothing much.",
          ko: "별거 없었어.",
          example: "A: What'd you do today?\nB: Nothing much. Laundry, a nap, another nap.",
          exampleKo: "A: 오늘 뭐 했어?\nB: 별거 없었어. 빨래, 낮잠, 또 낮잠.",
          note:
            "'Not much'랑 거의 같은데 'What did you do?'에는 'Nothing much'가 더 잘 붙어요. 뒤에 소소한 거 하나 붙이면 대화가 살아요.",
          register: "casual",
        },
        {
          id: "d09-3",
          phrase: "Same old, same old.",
          ko: "맨날 똑같지 뭐.",
          example: "A: How's work?\nB: Same old, same old. Coffee, emails, pretending to be busy at 4:30.",
          exampleKo: "A: 일은 어때?\nB: 맨날 똑같지 뭐. 커피, 이메일, 4시 반에 바쁜 척.",
          note:
            "특별한 일 없을 때 쓰는 클래식 표현이에요. 두 번 반복하는 게 포인트. 살짝 지루해하는 톤으로 말해요.",
          register: "casual",
        },
        {
          id: "d09-4",
          phrase: "Pretty chill.",
          ko: "꽤 널널했어. / 한가했어.",
          example: "A: How was your Sunday?\nB: Pretty chill. I didn't put on real pants once.",
          exampleKo: "A: 일요일 어땠어?\nB: 꽤 널널했어. 제대로 된 바지를 한 번도 안 입었어.",
          note:
            "'chill'은 '춥다'가 아니라 '여유롭다, 편하다'예요. 'pretty'는 '예쁜'이 아니라 '꽤'. 둘 다 20~30대 필수 단어예요.",
          register: "casual",
        },
        {
          id: "d09-5",
          phrase: "I was swamped.",
          ko: "일에 완전 파묻혀 있었어.",
          example: "A: Why didn't you text back?\nB: I was swamped. My inbox had 200 unread by lunch.",
          exampleKo: "A: 왜 답장 안 했어?\nB: 일에 완전 파묻혀 있었어. 점심 전에 안 읽은 메일이 200개였어.",
          note:
            "'swamp'는 늪이에요. 늪에 빠진 것처럼 일이 많았다는 뜻. 'I was busy'보다 훨씬 생생하고 네이티브스러워요.",
          register: "casual",
        },
        {
          id: "d09-6",
          phrase: "How was your day?",
          ko: "오늘 하루 어땠어?",
          example: "A: How was your day?\nB: Weird. A pigeon followed me for three blocks.",
          exampleKo: "A: 오늘 하루 어땠어?\nB: 이상했어. 비둘기가 세 블록이나 따라왔어.",
          note:
            "집에 오면 누구나 묻는 질문이에요. 대답은 형용사 하나 + 이유 한 문장이 공식이에요. 'Good'으로만 끝내지 마세요.",
          register: "neutral",
        },
        {
          id: "d09-7",
          phrase: "Just the usual.",
          ko: "그냥 늘 하던 거.",
          example: "A: Anything exciting happen?\nB: Just the usual. Although I did see a dog in a stroller.",
          exampleKo: "A: 뭐 재밌는 일 있었어?\nB: 그냥 늘 하던 거. 근데 유모차 탄 강아지는 봤어.",
          note:
            "'Same old, same old'보다 짧고 담백해요. 카페에서 'The usual?'이라고 하면 '늘 먹던 거?'라는 뜻이기도 해요.",
          register: "casual",
        },
        {
          id: "d09-8",
          phrase: "It flew by.",
          ko: "순식간에 지나갔어.",
          example: "A: Was the shift long?\nB: It flew by. I blinked and it was 6 p.m.",
          exampleKo: "A: 근무 길었어?\nB: 순식간에 지나갔어. 눈 깜빡하니까 6시더라.",
          note:
            "시간이 날아갔다는 거예요. 바빴지만 나쁘지 않았을 때 써요. 'Time flies'의 과거형 버전이라고 생각하면 돼요.",
          register: "casual",
        },
      ],
      roleplay: {
        setting:
          "Weeknight at home around 8 p.m. Your roommate just got back from work and flops onto the couch next to you. You trade stories about how your days went.",
        aiRole:
          "Alex, your 28-year-old roommate who works at a vet clinic. Chatty, funny, always has one weird animal story, asks you lots of questions about your day.",
        userRoleKo: "퇴근한 룸메이트와 하루를 나누는 사람",
        goalKo: "내 하루를 오늘 표현 4개 이상 써서 설명하고, 룸메이트 하루도 물어보기. 한 번은 '별일 없었다'고 하면서도 작은 에피소드 하나 붙이기.",
        opener: "Ugh, finally home. A parrot bit me today, so that's where I'm at. How was your day?",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 10 — BOSS
    // ──────────────────────────────────────────────────────────────
    {
      day: 10,
      phase: 1,
      title: "Coffee Shop Small Talk",
      titleKo: "보스전: 카페 스몰토크 — 낯선 사람과 처음부터 끝까지",
      introKo:
        "첫 보스전이에요. 지난 9일 동안 배운 리액션, 필러, 인사, 약속, 거절을 한 번에 써야 해요. 오늘 chunk는 스몰토크를 시작하고 이어주고 끝내는 '접착제' 표현들이에요.",
      boss: true,
      chunks: [
        {
          id: "d10-1",
          phrase: "So, what brings you here?",
          ko: "그래서, 여긴 어쩐 일이에요?",
          example: "A: So, what brings you here?\nB: Honestly? The Wi-Fi at my place died and I have a deadline.",
          exampleKo: "A: 그래서, 여긴 어쩐 일이에요?\nB: 솔직히요? 집 와이파이가 죽었는데 마감이 있어서요.",
          note:
            "스몰토크를 여는 만능 질문이에요. 카페, 파티, 행사 어디서든 써요. 'So,' 하고 살짝 쉬는 게 자연스러움의 포인트.",
          register: "neutral",
        },
        {
          id: "d10-2",
          phrase: "You come here a lot?",
          ko: "여기 자주 와요?",
          example: "A: You come here a lot?\nB: Every day. The barista knows my order and my life problems.",
          exampleKo: "A: 여기 자주 와요?\nB: 매일요. 바리스타가 제 주문이랑 제 인생 고민까지 알아요.",
          note:
            "문법적으론 'Do you'가 빠졌지만 실제로는 이렇게 말해요. 끝을 올리면 질문이 돼요. 같은 장소에 있는 사람한테 자연스럽게 말 거는 법이에요.",
          register: "casual",
        },
        {
          id: "d10-3",
          phrase: "I'm actually new around here.",
          ko: "사실 저 이 동네 처음이에요.",
          example: "A: Know any good lunch spots?\nB: I'm actually new around here. I've only found the one with the sad sandwiches.",
          exampleKo: "A: 괜찮은 점심 집 알아요?\nB: 사실 저 이 동네 처음이에요. 슬픈 샌드위치 파는 곳 하나만 찾았어요.",
          note:
            "이 한 마디면 상대가 추천도 해주고 대화도 길어져요. 'actually'는 '사실은'으로 자연스러운 흐름을 만드는 필러예요.",
          register: "neutral",
        },
        {
          id: "d10-4",
          phrase: "Oh, by the way, ...",
          ko: "아 참, 그런데 ...",
          example: "A: Oh, by the way, they do free refills here.\nB: Why are you telling me this now? I've been rationing.",
          exampleKo: "A: 아 참, 여기 리필 무료예요.\nB: 그걸 왜 이제 말해줘요? 저 아껴 마시고 있었는데.",
          note:
            "화제를 바꾸거나 갑자기 생각난 걸 꺼낼 때 써요. 'Oh'를 붙이면 '아 맞다!' 느낌이 살아요. 텍스트에선 'btw'로 줄여요.",
          register: "casual",
        },
        {
          id: "d10-5",
          phrase: "Speaking of which, ...",
          ko: "말 나온 김에, ...",
          example: "A: This latte is amazing.\nB: Speaking of which, I should order mine before the line gets insane.",
          exampleKo: "A: 이 라떼 진짜 맛있다.\nB: 말 나온 김에, 줄 미쳐지기 전에 내 것도 주문해야겠다.",
          note:
            "방금 나온 얘기에 연결해서 새 얘기를 꺼낼 때 써요. 'Speaking of coffee, ...'처럼 단어를 넣어도 돼요. 대화를 매끄럽게 이어주는 접착제.",
          register: "neutral",
        },
        {
          id: "d10-6",
          phrase: "Anyway, I should get going.",
          ko: "아무튼, 저 이제 가봐야겠어요.",
          example: "A: Anyway, I should get going. My laptop's at 3%.\nB: Go, go. Save the laptop.",
          exampleKo: "A: 아무튼, 저 이제 가봐야겠어요. 노트북이 3%예요.\nB: 가요, 가요. 노트북을 구하세요.",
          note:
            "대화를 끝내는 가장 자연스러운 신호예요. 'Anyway'가 '자, 이제 마무리' 신호고, 'should get going'은 '가봐야 한다'는 뜻. 이유 하나 붙이면 더 부드러워요.",
          register: "neutral",
        },
        {
          id: "d10-7",
          phrase: "It was nice talking to you.",
          ko: "얘기 나눠서 즐거웠어요.",
          example: "A: It was nice talking to you. Good luck with the deadline!\nB: You too. Enjoy your fourth refill.",
          exampleKo: "A: 얘기 나눠서 즐거웠어요. 마감 잘 되길!\nB: 당신도요. 네 번째 리필 즐기세요.",
          note:
            "처음 만난 사람과 헤어질 때 필수예요. 이거 없이 가면 좀 차가워 보여요. 'Nice meeting you'는 처음 만난 사람한테만, 이건 아는 사람한테도 OK.",
          register: "neutral",
        },
        {
          id: "d10-8",
          phrase: "Take care!",
          ko: "잘 지내요! / 조심히 가요!",
          example: "A: Alright, I'm off. Take care!\nB: You too. Don't spill that on the way out.",
          exampleKo: "A: 자, 저 갈게요. 잘 지내요!\nB: 당신도요. 나가면서 그거 쏟지 마요.",
          note:
            "'Bye'보다 따뜻한 작별 인사예요. 처음 본 사람한테도, 친구한테도 다 써요. 'Take care of yourself'까지 하면 좀 더 진심.",
          register: "neutral",
        },
      ],
      roleplay: {
        setting:
          "A cozy neighborhood coffee shop on a Tuesday morning around 10 a.m. It's half full, there's one free seat at a shared table next to a friendly stranger, and the barista is chatty too. You just moved to this neighborhood.",
        aiRole:
          "Jess, a chatty 27-year-old freelance illustrator who works from this café every day. Warm, curious, slightly nosy, speaks fast and casual, teases a bit. Also plays the barista if the user orders.",
        userRoleKo: "이 동네로 막 이사 온 사람, 카페 공용 테이블에 앉은 손님",
        goalKo: "미션 5단계: (1) 인사하고 옆 사람과 대화 트기 (2) 상대 얘기에 리액션 3개 이상 (3) 커피 주문하기 (4) 동네 추천 받고 느슨한 약속 하나 잡기 (5) 자연스럽게 대화 끝내고 작별. 오늘 chunk 5개 이상 + 지난 9일 표현 5개 이상 쓰기.",
        opener: "Hey, that seat's free, go for it. I'm Jess, I basically live here. Haven't seen you around before, what brings you here?",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 11
    // ──────────────────────────────────────────────────────────────
    {
      day: 11,
      phase: 1,
      title: "Time & Being Late",
      titleKo: "시간과 지각 — 늦을 때, 기다릴 때 하는 말",
      introKo:
        "늦는 건 세계 공통이에요. 다만 늦을 때 뭐라고 문자 보내느냐가 관계를 좌우하죠. 오늘은 늦는 쪽, 기다리는 쪽 둘 다의 표현을 배워요.",
      chunks: [
        {
          id: "d11-1",
          phrase: "I'm running late.",
          ko: "나 좀 늦을 것 같아.",
          example: "A: I'm running late. The bus decided to take a scenic route.\nB: Classic. I'll grab us a table.",
          exampleKo: "A: 나 좀 늦을 것 같아. 버스가 경치 구경 코스로 가기로 했나 봐.\nB: 역시. 내가 자리 잡아놓을게.",
          note:
            "'I'm late'는 이미 늦은 거고, 'running late'는 '지금 늦어지는 중'이에요. 약속 전에 미리 보내는 문자로 딱이에요.",
          register: "casual",
        },
        {
          id: "d11-2",
          phrase: "Be there in 10.",
          ko: "10분 안에 갈게.",
          example: "A: Where are you?\nB: Be there in 10. Which means 20, but I'm trying.",
          exampleKo: "A: 어디야?\nB: 10분 안에 가. 그러니까 20분인데, 노력 중이야.",
          note:
            "'I'll be there in 10 minutes'를 줄인 거예요. 문자에선 이렇게 줄여요. 숫자만 바꾸면 돼요. 'Be there in 5'는 거의 다 왔다는 뜻.",
          register: "casual",
        },
        {
          id: "d11-3",
          phrase: "Take your time.",
          ko: "천천히 와. / 서두르지 마.",
          example: "A: Sorry, I'm still looking for parking.\nB: Take your time. I found a dog to pet.",
          exampleKo: "A: 미안, 아직 주차 자리 찾는 중이야.\nB: 천천히 와. 나 쓰다듬을 강아지 찾았어.",
          note:
            "기다리는 쪽이 하는 말이에요. 상대가 미안해할 때 이걸로 받아주면 쿨해 보여요. 직원이 손님한테도 자주 써요.",
          register: "neutral",
        },
        {
          id: "d11-4",
          phrase: "I lost track of time.",
          ko: "시간 가는 줄 몰랐어.",
          example: "A: You're an hour late.\nB: I lost track of time. One episode became five.",
          exampleKo: "A: 너 한 시간 늦었어.\nB: 시간 가는 줄 몰랐어. 한 편이 다섯 편이 됐어.",
          note:
            "늦은 이유 중 제일 솔직하고 흔한 거예요. 'track'은 '추적'인데 여기선 시간을 놓쳤다는 뜻. 미안한 표정 필수.",
          register: "casual",
        },
        {
          id: "d11-5",
          phrase: "No rush.",
          ko: "급할 거 없어. / 서두르지 마.",
          example: "A: I'll send you that file tonight, sorry it's late.\nB: No rush. Whenever you get to it.",
          exampleKo: "A: 그 파일 오늘 밤에 보낼게, 늦어서 미안.\nB: 급할 거 없어. 되는 대로 보내.",
          note:
            "'Take your time'의 더 짧은 버전이에요. 문자 끝에 'no rush' 붙이면 상대 부담을 확 줄여줘요. 일할 때도 많이 써요.",
          register: "casual",
        },
        {
          id: "d11-6",
          phrase: "Sorry to keep you waiting.",
          ko: "기다리게 해서 미안해.",
          example: "A: Sorry to keep you waiting. There was a line for the line.\nB: It's fine. I made friends with the hostess.",
          exampleKo: "A: 기다리게 해서 미안해. 줄 서려고 줄 서야 했어.\nB: 괜찮아. 나 안내 직원이랑 친구 됐어.",
          note:
            "늦게 도착해서 처음 하는 말로 제일 자연스러워요. 가게 직원도 손님한테 많이 써요. 'Sorry I'm late'보다 상대를 배려하는 느낌.",
          register: "neutral",
        },
        {
          id: "d11-7",
          phrase: "Traffic was insane.",
          ko: "차가 미친 듯이 막혔어.",
          example: "A: What happened? You said 10 minutes.\nB: Traffic was insane. I aged five years on the highway.",
          exampleKo: "A: 무슨 일이야? 10분이라며.\nB: 차가 미친 듯이 막혔어. 고속도로에서 5년 늙었어.",
          note:
            "미국인의 국민 지각 변명이에요. 'insane', 'crazy', 'brutal' 다 돼요. 진짜든 아니든 모두가 고개를 끄덕여줘요.",
          register: "casual",
        },
        {
          id: "d11-8",
          phrase: "Better late than never.",
          ko: "늦더라도 안 오는 것보단 낫지.",
          example: "A: Look who finally showed up.\nB: Better late than never. I brought donuts as an apology.",
          exampleKo: "A: 드디어 누가 나타났네.\nB: 늦더라도 안 오는 것보단 낫잖아. 사과의 의미로 도넛 가져왔어.",
          note:
            "늦은 사람이 뻔뻔하게, 또는 기다린 사람이 용서하면서 둘 다 쓸 수 있어요. 살짝 유머러스하게 상황을 풀어주는 표현.",
          register: "casual",
        },
      ],
      roleplay: {
        setting:
          "Saturday at 1 p.m. You were supposed to meet your friend at a popular ramen place at 12:30. You're late, and they've been texting. This is the phone call and then the moment you arrive.",
        aiRole:
          "Nina, a 26-year-old patient but sarcastic friend from Denver. Pretends to be annoyed, forgives easily, loves a dramatic excuse.",
        userRoleKo: "약속에 늦어서 전화하고 도착하는 사람",
        goalKo: "늦는다고 알리기 → 이유 말하기 → 도착해서 사과하기까지 오늘 표현 4개 이상. 상대가 '괜찮다'고 할 때 받아치는 말도 하나 쓰기.",
        opener: "Hello? Where are you? I've been staring at this menu so long I've memorized it. Please tell me you're close.",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 12
    // ──────────────────────────────────────────────────────────────
    {
      day: 12,
      phase: 1,
      title: "Light Opinions",
      titleKo: "가벼운 의견 말하기 — 세지 않게 내 생각 꺼내기",
      introKo:
        "'I think'만 반복하면 초등학생 같아요. 'I feel like', 'To be honest', 'It's not my thing'처럼 가볍게 내 취향을 말하는 패턴이 있어요. 오늘은 그걸 입에 붙여요.",
      chunks: [
        {
          id: "d12-1",
          phrase: "I feel like ...",
          ko: "~인 것 같아. / 왠지 ~ 같아.",
          example: "A: Should we go to the beach?\nB: I feel like it's gonna rain. My knee says so.",
          exampleKo: "A: 해변 갈까?\nB: 비 올 것 같아. 내 무릎이 그렇대.",
          note:
            "'I think'의 부드럽고 캐주얼한 버전이에요. 확신 없이 '그냥 그런 느낌'이라는 뉘앙스. 미국 20~30대가 'I think'보다 훨씬 많이 써요.",
          register: "casual",
        },
        {
          id: "d12-2",
          phrase: "To be honest, ...",
          ko: "솔직히 말하면, ...",
          example: "A: Did you like the gift?\nB: To be honest, I already own three of these. But it's the thought that counts!",
          exampleKo: "A: 선물 마음에 들었어?\nB: 솔직히 말하면, 나 이거 이미 세 개 있어. 근데 마음이 중요하지!",
          note:
            "살짝 반대 의견이나 부정적인 말 앞에 붙여서 충격을 줄여줘요. 텍스트에선 'tbh'. 'Honestly,'도 같은 역할.",
          register: "neutral",
        },
        {
          id: "d12-3",
          phrase: "If you ask me, ...",
          ko: "내 생각엔 말이지, ...",
          example: "A: The new office layout is so modern.\nB: If you ask me, it's just a warehouse with plants.",
          exampleKo: "A: 새 사무실 배치 엄청 모던하다.\nB: 내 생각엔 말이지, 그냥 화분 둔 창고야.",
          note:
            "아무도 안 물어봤어도 '내 의견 한번 들어봐' 하고 꺼낼 때 써요. 살짝 자신감 있고 유머러스한 느낌. 반대 의견에 특히 잘 어울려요.",
          register: "casual",
        },
        {
          id: "d12-4",
          phrase: "It's not my thing.",
          ko: "내 취향은 아니야. / 나랑은 안 맞아.",
          example: "A: You should try hot yoga!\nB: It's not my thing. I don't pay to sweat in a stranger's smell.",
          exampleKo: "A: 핫요가 해봐!\nB: 내 취향 아니야. 남의 냄새 속에서 땀 흘리려고 돈 안 내.",
          note:
            "'싫어'라고 하면 세 보이니까 '내 스타일은 아니야'로 부드럽게 빼는 말이에요. 반대로 좋아하면 'It's totally my thing'.",
          register: "casual",
        },
        {
          id: "d12-5",
          phrase: "I'm not a big fan.",
          ko: "별로 안 좋아해.",
          example: "A: Want some cilantro on that?\nB: I'm not a big fan. It tastes like soap had a baby with a lawn.",
          exampleKo: "A: 고수 올려줄까?\nB: 별로 안 좋아해. 비누랑 잔디가 애를 낳은 맛이야.",
          note:
            "'I hate it'을 부드럽게 만든 표현이에요. 뒤에 'of ...'를 붙여 'I'm not a big fan of cilantro'라고 해도 돼요. 음식, 음악, 사람 다 OK.",
          register: "casual",
        },
        {
          id: "d12-6",
          phrase: "It's okay, I guess.",
          ko: "뭐, 괜찮긴 해. (별로라는 뜻)",
          example: "A: How's the new phone?\nB: It's okay, I guess. It's a phone. It phones.",
          exampleKo: "A: 새 폰 어때?\nB: 뭐, 괜찮긴 해. 폰이지. 폰 역할 해.",
          note:
            "'I guess'가 붙으면 '그냥 그래'라는 뜻이 돼요. 미지근한 평가의 대표 표현. 어깨 으쓱하는 톤으로 말하세요.",
          register: "casual",
        },
        {
          id: "d12-7",
          phrase: "I'm really into ...",
          ko: "나 요즘 ~에 완전 빠졌어.",
          example: "A: What do you do on weekends?\nB: I'm really into pottery now. I've made six ugly bowls.",
          exampleKo: "A: 주말에 뭐 해?\nB: 나 요즘 도자기에 완전 빠졌어. 못생긴 그릇 여섯 개 만들었어.",
          note:
            "'I like'보다 열정이 담긴 표현이에요. 취미, 음악, 사람 다 돼요. 'I'm into you'는 '너한테 관심 있어'라는 고백이니 주의!",
          register: "casual",
        },
        {
          id: "d12-8",
          phrase: "It's overrated.",
          ko: "과대평가됐어. / 소문만큼은 아니야.",
          example: "A: You didn't like the famous bakery?\nB: It's overrated. I waited an hour for a $9 croissant.",
          exampleKo: "A: 그 유명 빵집 별로였어?\nB: 과대평가됐어. 9달러짜리 크루아상 때문에 한 시간 기다렸어.",
          note:
            "유명한데 기대 이하였을 때 쓰는 말이에요. 반대는 'underrated'(숨은 보석). 이 둘은 미국인 대화에 매일 나와요.",
          register: "casual",
        },
      ],
      roleplay: {
        setting:
          "Lunch break on a bench outside the office on a sunny day. A coworker is asking your opinion on everything: the new café nearby, a trending TV show, a weekend hobby they're obsessed with.",
        aiRole:
          "Leo, a 30-year-old enthusiastic coworker from Miami who's into everything and wants your take. Energetic, asks 'what do you think?' constantly, not easily offended.",
        userRoleKo: "레오의 질문에 솔직한 취향을 말하는 동료",
        goalKo: "질문마다 오늘 배운 의견 표현으로 답하기 (5개 이상). 최소 하나는 '별로'라고 부드럽게 말하고, 하나는 '완전 빠졌다'고 말하기.",
        opener: "Okay, you have to tell me. That new ramen place everyone's posting about. Worth the hype or no? What do you think?",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 13
    // ──────────────────────────────────────────────────────────────
    {
      day: 13,
      phase: 1,
      title: "Weather & Complaining",
      titleKo: "날씨와 투덜거리기 — 가장 쉬운 스몰토크",
      introKo:
        "날씨 얘기는 세상에서 가장 안전한 대화 시작이에요. 엘리베이터에서, 줄 서서, 아무나한테 던질 수 있죠. 오늘은 날씨로 투덜대면서 친해지는 법을 배워요.",
      chunks: [
        {
          id: "d13-1",
          phrase: "It's freezing.",
          ko: "얼어 죽겠다. / 완전 추워.",
          example: "A: It's freezing. Why did I wear shorts?\nB: Because you checked the weather in a different city.",
          exampleKo: "A: 얼어 죽겠다. 내가 왜 반바지를 입었지?\nB: 다른 도시 날씨를 확인했으니까.",
          note:
            "'It's cold'는 밋밋해요. 조금만 추워도 미국인들은 'freezing'이라고 해요. 'I'm freezing'이라고 하면 '나 얼어 죽겠어'.",
          register: "casual",
        },
        {
          id: "d13-2",
          phrase: "It's scorching out.",
          ko: "밖이 타 죽을 것 같아.",
          example: "A: Want to walk to lunch?\nB: It's scorching out. The sidewalk is cooking eggs.",
          exampleKo: "A: 점심 걸어서 갈래?\nB: 밖이 타 죽을 것 같아. 보도에서 계란이 익고 있어.",
          note:
            "'scorch'는 '그슬리다'예요. 그냥 'hot'이 아니라 '타들어갈 정도'. 'out'은 'outside'의 줄임으로 날씨 얘기에 거의 항상 붙어요.",
          register: "casual",
        },
        {
          id: "d13-3",
          phrase: "Ugh, it's gross out.",
          ko: "으, 밖에 날씨 완전 구려.",
          example: "A: Ugh, it's gross out. Rain, wind, sadness.\nB: Perfect. Let's stay in and order way too much food.",
          exampleKo: "A: 으, 밖에 날씨 완전 구려. 비, 바람, 슬픔.\nB: 완벽하네. 집에 있으면서 음식 엄청 시키자.",
          note:
            "'gross'는 보통 '역겹다'인데 날씨에 쓰면 '찝찝하고 별로'예요. 'Ugh'를 앞에 붙이면 진짜 네이티브 투덜거림이 완성돼요.",
          register: "casual",
        },
        {
          id: "d13-4",
          phrase: "I'm melting.",
          ko: "나 녹고 있어. (너무 더워)",
          example: "A: How's the outdoor wedding?\nB: I'm melting. My makeup is now on my neck.",
          exampleKo: "A: 야외 결혼식 어때?\nB: 나 녹고 있어. 내 화장이 이제 목에 있어.",
          note:
            "더위를 과장하는 표현이에요. 미국인들은 날씨 얘기할 때 무조건 과장해요. 부채질하면서 말하면 완벽.",
          register: "casual",
        },
        {
          id: "d13-5",
          phrase: "It's pouring.",
          ko: "비가 쏟아져. / 억수같이 와.",
          example: "A: Did you bring an umbrella?\nB: No. And now it's pouring. I look like a wet cat.",
          exampleKo: "A: 우산 가져왔어?\nB: 아니. 근데 비가 쏟아져. 나 지금 젖은 고양이 꼴이야.",
          note:
            "'raining'은 그냥 비, 'pouring'은 퍼붓는 비예요. 'It's pouring out there'로 늘리면 더 자연스러워요. 'raining cats and dogs'는 옛날 말이라 거의 안 써요.",
          register: "casual",
        },
        {
          id: "d13-6",
          phrase: "Nice out, huh?",
          ko: "날씨 좋지?",
          example: "A: Nice out, huh?\nB: Finally. I forgot what the sun looked like.",
          exampleKo: "A: 날씨 좋지?\nB: 드디어. 해가 어떻게 생겼는지 까먹을 뻔했어.",
          note:
            "모르는 사람한테 말 걸기 가장 쉬운 한 마디예요. 'It's nice out, huh?'에서 'It's'까지 빼고 말해요. 'huh?'는 동의를 구하는 꼬리.",
          register: "casual",
        },
        {
          id: "d13-7",
          phrase: "It's muggy.",
          ko: "후덥지근해. / 습해서 끈적해.",
          example: "A: It's muggy. My hair has given up.\nB: Same. I look like I walked through a car wash.",
          exampleKo: "A: 후덥지근해. 내 머리가 포기했어.\nB: 나도. 세차장 걸어서 지나온 것 같아.",
          note:
            "'humid'보다 더 '끈적하고 불쾌한' 느낌이에요. 한국 여름 장마철이 딱 muggy. 'It's so muggy today'로 자주 써요.",
          register: "casual",
        },
        {
          id: "d13-8",
          phrase: "Bundle up.",
          ko: "따뜻하게 입어. / 꽁꽁 싸매.",
          example: "A: I'm heading out to the game.\nB: Bundle up. It's gonna drop to 20 tonight.",
          exampleKo: "A: 나 경기 보러 나간다.\nB: 따뜻하게 입어. 오늘 밤 영하 7도까지 떨어진대.",
          note:
            "추울 때 상대를 챙기는 말이에요. 엄마 같은 느낌도 있지만 친구끼리도 자주 써요. 'Dress warm'도 같은 뜻.",
          register: "casual",
        },
      ],
      roleplay: {
        setting:
          "Waiting at a bus stop in Chicago on a miserable day — cold, windy, drizzling. A stranger next to you is also freezing and clearly wants to complain about it with someone.",
        aiRole:
          "Pat, a 33-year-old grumpy-but-friendly Chicago local who loves complaining about weather. Dry humor, exaggerates everything, warms up quickly.",
        userRoleKo: "버스 정류장에서 추위에 떠는 사람",
        goalKo: "날씨 투덜거림으로 대화 시작 → 서로 과장해서 불평 → 다른 계절 얘기로 넘어가기. 오늘 날씨 표현 5개 이상 쓰기.",
        opener: "Unbelievable. It was sunny an hour ago and now this. You cold too, or is it just me?",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 14
    // ──────────────────────────────────────────────────────────────
    {
      day: 14,
      phase: 1,
      title: "Compliments",
      titleKo: "칭찬하기 — 어색하지 않게 띄워주기",
      introKo:
        "미국인들은 칭찬을 공기처럼 해요. 옷, 머리, 발표, 음식 전부요. 'Good job' 말고 진짜 쓰는 칭찬을 배우면 사람이 금방 친해져요.",
      chunks: [
        {
          id: "d14-1",
          phrase: "You killed it.",
          ko: "완전 찢었다. / 대박 잘했어.",
          example: "A: How was my presentation?\nB: You killed it. Even the CFO put his phone down.",
          exampleKo: "A: 내 발표 어땠어?\nB: 완전 찢었어. CFO까지 폰을 내려놨어.",
          note:
            "'죽였다'가 아니라 '끝내주게 잘했다'예요. 발표, 공연, 시험, 운동 다 돼요. 'You crushed it'도 같은 뜻이에요.",
          register: "casual",
        },
        {
          id: "d14-2",
          phrase: "Love that.",
          ko: "완전 좋아. / 그거 너무 좋다.",
          example: "A: I decided to quit and open a bakery.\nB: Love that. Save me a croissant.",
          exampleKo: "A: 나 그만두고 빵집 열기로 했어.\nB: 완전 좋다. 크루아상 하나 남겨줘.",
          note:
            "'I' 없이 'Love that'만 말해요. 상대의 결정, 옷, 아이디어에 즉각 반응하는 말. 'Love that for you'는 '너한테 딱이다'라는 뜻이에요.",
          register: "casual",
        },
        {
          id: "d14-3",
          phrase: "Nice one.",
          ko: "잘했어. / 굿.",
          example: "A: I parallel parked on the first try.\nB: Nice one. That's a real adult skill.",
          exampleKo: "A: 평행 주차 한 번에 성공했어.\nB: 잘했어. 그거 진짜 어른 스킬이야.",
          note:
            "작은 성공에 가볍게 던지는 칭찬이에요. 농담 잘 쳤을 때도 'Nice one'. 영국에서 왔지만 미국에서도 많이 써요.",
          register: "casual",
        },
        {
          id: "d14-4",
          phrase: "Props.",
          ko: "인정. / 리스펙.",
          example: "A: I ran five miles before work.\nB: Props. I ran to the fridge before work.",
          exampleKo: "A: 출근 전에 5마일 뛰었어.\nB: 인정. 난 출근 전에 냉장고까지 뛰었어.",
          note:
            "'proper respect'의 줄임말이에요. 한 단어로 '인정한다'는 뜻. 'Props to you'로도 써요. 캐주얼하지만 진심이 담긴 칭찬.",
          register: "slang",
        },
        {
          id: "d14-5",
          phrase: "That's a good look on you.",
          ko: "그거 너한테 잘 어울린다.",
          example: "A: New glasses. Too much?\nB: That's a good look on you. Very 'smart but fun'.",
          exampleKo: "A: 새 안경. 좀 과해?\nB: 너한테 잘 어울려. 완전 '똑똑한데 재밌는' 느낌.",
          note:
            "옷, 머리, 안경 등 외모 칭찬이에요. 'It suits you'보다 훨씬 캐주얼하고 요즘 말투예요. 'That's a good look'만 해도 돼요.",
          register: "casual",
        },
        {
          id: "d14-6",
          phrase: "You're a lifesaver.",
          ko: "넌 생명의 은인이야. / 진짜 고마워.",
          example: "A: I brought you a charger.\nB: You're a lifesaver. I was at 1% and spiraling.",
          exampleKo: "A: 충전기 가져왔어.\nB: 넌 생명의 은인이야. 1%에서 멘붕 오고 있었어.",
          note:
            "도움 받았을 때 'Thank you'보다 훨씬 감정이 실린 칭찬이에요. 작은 일에도 과장해서 쓰는 게 미국식이에요.",
          register: "casual",
        },
        {
          id: "d14-7",
          phrase: "Nailed it.",
          ko: "딱 해냈어. / 완벽.",
          example: "A: Did I say the word right? 'Worcestershire'?\nB: Nailed it. I still can't say it.",
          exampleKo: "A: 나 그 단어 제대로 말했어? '우스터셔'?\nB: 딱 해냈어. 난 아직도 못 해.",
          note:
            "못을 딱 박은 것처럼 정확히 해냈다는 뜻이에요. 'You nailed it'도 OK. 실패했을 때 반어법으로 'Nailed it'이라고 하면 웃겨요.",
          register: "casual",
        },
        {
          id: "d14-8",
          phrase: "Where'd you get that?",
          ko: "그거 어디서 샀어? (= 예쁘다)",
          example: "A: Where'd you get that jacket? It's so good.\nB: Thrift store, 12 bucks. Don't tell anyone.",
          exampleKo: "A: 그 재킷 어디서 샀어? 완전 예쁘다.\nB: 중고 가게, 12달러. 아무한테도 말하지 마.",
          note:
            "미국에서 '어디서 샀어?'는 사실상 칭찬이에요. 'Where did you'가 'Where'd you'로 뭉개져요. 이 질문 하나로 대화가 열려요.",
          register: "casual",
        },
      ],
      roleplay: {
        setting:
          "A friend's small apartment housewarming party on a Saturday evening. The host cooked everything, redecorated the place, and is nervously asking what people think. Other guests are showing off new outfits.",
        aiRole:
          "Sofia, a 27-year-old nervous but proud host from San Diego. Keeps fishing for reassurance, deflects compliments awkwardly, then gets really happy.",
        userRoleKo: "집들이에 온 손님",
        goalKo: "집, 음식, 옷, 요리 실력 등에 대해 오늘 배운 칭찬 6개 이상 쓰기. 한 번은 상대 물건에 대해 '어디서 샀어?'로 대화 열기.",
        opener: "You made it! Okay, be honest, is the place too much? I repainted everything at 2 a.m. and I'm not sure anymore.",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 15
    // ──────────────────────────────────────────────────────────────
    {
      day: 15,
      phase: 1,
      title: "Being Tired & Busy",
      titleKo: "피곤하고 바쁠 때 — 'I'm tired' 말고",
      introKo:
        "'I'm tired', 'I'm busy'는 백 번 말해도 안 늘어요. 네이티브는 'I'm beat', 'I'm slammed'처럼 생생한 말을 써요. 오늘은 지친 상태를 멋있게 말하는 법을 배워요.",
      chunks: [
        {
          id: "d15-1",
          phrase: "I'm beat.",
          ko: "나 완전 지쳤어.",
          example: "A: Wanna go out tonight?\nB: I'm beat. I've been awake since a time that shouldn't exist.",
          exampleKo: "A: 오늘 밤 나갈래?\nB: 나 완전 지쳤어. 존재해선 안 되는 시간부터 깨어 있었어.",
          note:
            "'맞았다'가 아니라 '지쳤다'예요. 'I'm tired'보다 훨씬 자연스럽고 짧아요. 소파에 쓰러지면서 말하는 그 느낌.",
          register: "casual",
        },
        {
          id: "d15-2",
          phrase: "I'm slammed.",
          ko: "나 지금 일에 치여.",
          example: "A: Can you help me with the slides?\nB: I'm slammed today. Tomorrow I'm all yours.",
          exampleKo: "A: 슬라이드 좀 도와줄 수 있어?\nB: 오늘은 일에 치여. 내일은 완전 네 거야.",
          note:
            "'swamped'랑 비슷한데 'slammed'는 더 갑작스럽고 세게 치이는 느낌이에요. 직장에서 특히 많이 써요. 'at work'까지 붙이면 더 명확.",
          register: "work",
        },
        {
          id: "d15-3",
          phrase: "Running on fumes.",
          ko: "에너지 바닥이야. / 간신히 버티는 중.",
          example: "A: You okay? You just put your keys in the fridge.\nB: Running on fumes. I had three hours of sleep.",
          exampleKo: "A: 괜찮아? 방금 열쇠를 냉장고에 넣었어.\nB: 에너지 바닥이야. 세 시간 잤어.",
          note:
            "기름이 다 떨어져서 연기로만 달리는 차에서 온 표현이에요. 'I'm running on fumes'가 풀 버전. 밤새거나 과로했을 때 딱.",
          register: "casual",
        },
        {
          id: "d15-4",
          phrase: "I need a nap.",
          ko: "낮잠 좀 자야겠어.",
          example: "A: It's only 11 a.m.\nB: I need a nap. Time is a construct and I'm tired.",
          exampleKo: "A: 아직 오전 11시야.\nB: 낮잠 좀 자야겠어. 시간은 개념일 뿐이고 난 피곤해.",
          note:
            "미국 20~30대의 입버릇이에요. 진짜 잘 생각이 없어도 피곤하면 그냥 이렇게 말해요. 'nap'은 낮잠, 'sleep'은 밤잠.",
          register: "casual",
        },
        {
          id: "d15-5",
          phrase: "I'm wiped out.",
          ko: "완전 녹초가 됐어.",
          example: "A: How was moving day?\nB: I'm wiped out. I own too many books and too few friends with trucks.",
          exampleKo: "A: 이사 어땠어?\nB: 완전 녹초가 됐어. 책은 너무 많고 트럭 있는 친구는 너무 적어.",
          note:
            "'wipe'는 닦아내다인데 여기선 에너지가 싹 지워졌다는 뜻이에요. 육체적으로 힘든 일 뒤에 특히 잘 어울려요. 'I'm wiped'로 줄여도 돼요.",
          register: "casual",
        },
        {
          id: "d15-6",
          phrase: "I've got a lot on my plate.",
          ko: "지금 할 일이 산더미야.",
          example: "A: Can you join the planning committee?\nB: I've got a lot on my plate right now. Ask me in a month.",
          exampleKo: "A: 기획 위원회에 들어올 수 있어?\nB: 지금 할 일이 산더미야. 한 달 뒤에 물어봐줘.",
          note:
            "접시에 음식이 가득한 것처럼 할 일이 많다는 뜻이에요. 부탁을 거절할 때 이유로 쓰면 정중하고 자연스러워요. 직장에서 자주 들려요.",
          register: "work",
        },
        {
          id: "d15-7",
          phrase: "I'm dead.",
          ko: "나 죽었어. (너무 피곤 / 웃겨 죽겠다)",
          example: "A: How was the 6 a.m. spin class?\nB: I'm dead. Tell my family I loved them.",
          exampleKo: "A: 아침 6시 스핀 수업 어땠어?\nB: 나 죽었어. 가족한테 사랑했다고 전해줘.",
          note:
            "피곤할 때도 쓰지만, 뭔가 너무 웃길 때도 'I'm dead'라고 해요. 문맥으로 구분돼요. 텍스트에선 해골 이모지 하나로 대체.",
          register: "slang",
        },
        {
          id: "d15-8",
          phrase: "I could use a break.",
          ko: "좀 쉬어야 할 것 같아.",
          example: "A: You've been staring at that spreadsheet for two hours.\nB: I could use a break. Or a new career.",
          exampleKo: "A: 너 그 스프레드시트 두 시간째 보고 있어.\nB: 좀 쉬어야 할 것 같아. 아니면 새 직업이든가.",
          note:
            "'I need a break'보다 부드러운 표현이에요. 'could use'는 '~가 있으면 좋겠다'는 덩어리로 외우세요. 'I could use a coffee'로 응용.",
          register: "neutral",
        },
      ],
      roleplay: {
        setting:
          "Wednesday at 6 p.m. in the office. It's been a brutal week for everyone. A coworker drops by your desk wanting to vent and also to ask for a favor on a project.",
        aiRole:
          "Ben, a 32-year-old overworked project manager from Boston. Exhausted, dramatic about it, sympathetic, but still needs your help on something.",
        userRoleKo: "벤만큼이나 지친 동료",
        goalKo: "내 피곤함과 바쁨을 오늘 표현 5개 이상으로 표현하기. 벤의 부탁 하나는 바쁘다는 이유로 미루고, 하나는 들어주기.",
        opener: "Hey. You look how I feel. Is this week a joke? I've had back-to-back meetings since 8. How are you holding up?",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 16
    // ──────────────────────────────────────────────────────────────
    {
      day: 16,
      phase: 1,
      title: "Texting Basics",
      titleKo: "문자 기본 — 약어 모르면 대화가 안 돼요",
      introKo:
        "미국 친구랑 문자하면 절반이 약어예요. 'wyd', 'omw', 'ngl'을 모르면 답장을 못 하죠. 오늘은 매일 쓰는 약어 8개를 뜻과 쓰는 상황까지 완전히 익혀요.",
      chunks: [
        {
          id: "d16-1",
          phrase: "lol",
          ko: "ㅋㅋ",
          example: "A: I just waved back at someone who wasn't waving at me\nB: lol classic",
          exampleKo: "A: 나한테 손 흔든 것도 아닌 사람한테 손 흔들어 답했어\nB: ㅋㅋ 역시",
          note:
            "'laughing out loud'인데 진짜 웃긴 게 아니라 그냥 'ㅋㅋ'예요. 문장 끝에 붙여서 분위기 부드럽게 만드는 용도. 진짜 웃기면 'lmao', 'I'm crying'.",
          register: "slang",
        },
        {
          id: "d16-2",
          phrase: "brb",
          ko: "잠깐만, 금방 올게",
          example: "A: brb my food's here\nB: priorities, respect",
          exampleKo: "A: 잠깐만 음식 왔어\nB: 우선순위 확실하네, 인정",
          note:
            "'be right back'이에요. 채팅 중 잠깐 자리 비울 때 써요. 돌아오면 'back' 한 마디. 게임이나 영상통화에서도 많이 들려요.",
          register: "slang",
        },
        {
          id: "d16-3",
          phrase: "omw",
          ko: "가는 중",
          example: "A: are you close?\nB: omw! 5 min",
          exampleKo: "A: 거의 다 왔어?\nB: 가는 중! 5분",
          note:
            "'on my way'예요. 약속 가는 길에 제일 많이 보내는 문자. 보통 아직 집에서 나오지도 않았을 때 보내요(미국인 농담).",
          register: "slang",
        },
        {
          id: "d16-4",
          phrase: "nvm",
          ko: "아 됐어, 신경 쓰지 마",
          example: "A: where's the remote?? nvm found it, I was sitting on it\nB: of course you were",
          exampleKo: "A: 리모컨 어딨어?? 아 됐어, 찾았어, 내가 깔고 앉아 있었어\nB: 그럴 줄 알았어",
          note:
            "'never mind'예요. 방금 물어본 거 해결됐거나 말 취소할 때 써요. 말로 할 때는 'Never mind'를 끝을 내려서 말해요.",
          register: "slang",
        },
        {
          id: "d16-5",
          phrase: "ngl",
          ko: "솔직히 말하면 (안 숨기고)",
          example: "A: how was the party\nB: ngl kinda boring, I left at 10",
          exampleKo: "A: 파티 어땠어\nB: 솔직히 좀 지루했어, 10시에 나왔어",
          note:
            "'not gonna lie'예요. 살짝 부정적이거나 창피한 솔직한 말 앞에 붙여요. 'tbh'랑 거의 같은데 'ngl'이 더 젊고 캐주얼해요.",
          register: "slang",
        },
        {
          id: "d16-6",
          phrase: "tbh",
          ko: "솔직히",
          example: "A: do you even like him\nB: tbh I'm not sure anymore",
          exampleKo: "A: 걔 좋아하긴 해?\nB: 솔직히 이제 잘 모르겠어",
          note:
            "'to be honest'예요. 문장 앞이나 뒤 어디든 붙여요. 'I liked it tbh'처럼 뒤에 붙이면 '뭐 솔직히 좋았어' 느낌이 돼요.",
          register: "slang",
        },
        {
          id: "d16-7",
          phrase: "idk",
          ko: "몰라 / 글쎄",
          example: "A: what should we eat tonight\nB: idk, you pick, I picked last time and got yelled at",
          exampleKo: "A: 오늘 저녁 뭐 먹지\nB: 몰라, 네가 골라, 지난번에 내가 골랐다가 혼났어",
          note:
            "'I don't know'예요. 제일 많이 쓰는 약어 중 하나. 'idk, maybe?'처럼 뒤에 애매한 의견 붙이면 자연스러워요. 'idc'는 'I don't care'.",
          register: "slang",
        },
        {
          id: "d16-8",
          phrase: "wyd",
          ko: "뭐해?",
          example: "A: wyd\nB: lying on the floor, you?",
          exampleKo: "A: 뭐해\nB: 바닥에 누워 있어, 너는?",
          note:
            "'what you doing'이에요. 그냥 뭐 하냐는 질문이기도 하고, '뭐해, 놀래?'라는 의도로 보내기도 해요. 밤 11시에 오면 보통 두 번째 뜻.",
          register: "slang",
        },
      ],
      roleplay: {
        setting:
          "A text conversation on a Friday evening. Your friend is texting you from across town, trying to figure out if you're free, where you are, and what the plan is. Everything is in short texts with abbreviations.",
        aiRole:
          "Kay, a 24-year-old friend who texts entirely in lowercase with abbreviations and no punctuation. Fast, playful, sends several messages in a row.",
        userRoleKo: "케이와 문자로 금요일 밤 계획을 짜는 친구",
        goalKo: "문자 톤(소문자, 짧게)으로 대화하면서 오늘 약어 6개 이상 쓰기. 중간에 한 번 자리 비우기(brb), 한 번 말 취소하기(nvm) 해보기.",
        opener: "wyd rn\nare u home or out\nalso idk if u saw but it's raining lol",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 17
    // ──────────────────────────────────────────────────────────────
    {
      day: 17,
      phase: 1,
      title: "Apologizing & Brushing It Off",
      titleKo: "사과하고 넘기기 — 가볍게 미안해하고 가볍게 받아주기",
      introKo:
        "'I'm sorry'를 너무 정색하고 하면 분위기가 무거워져요. 작은 실수는 'My bad' 한 마디, 받을 땐 'No worries'. 오늘은 사과의 가벼운 버전과 쿨하게 넘기는 법을 배워요.",
      chunks: [
        {
          id: "d17-1",
          phrase: "My bad.",
          ko: "아 내 실수. / 미안.",
          example: "A: You left the milk out all night.\nB: My bad. I'll buy a new one. And smell this one first.",
          exampleKo: "A: 우유를 밤새 밖에 놔뒀어.\nB: 아 내 실수. 새로 살게. 그리고 이거 냄새부터 맡아볼게.",
          note:
            "작은 실수에 쓰는 초간단 사과예요. 'I'm sorry'보다 훨씬 가벼워요. 큰 잘못에 'My bad'라고 하면 진심 없어 보이니 주의.",
          register: "casual",
        },
        {
          id: "d17-2",
          phrase: "No worries.",
          ko: "괜찮아. / 신경 쓰지 마.",
          example: "A: Sorry I'm late, again.\nB: No worries. I've started telling you a time 15 minutes early.",
          exampleKo: "A: 늦어서 미안, 또.\nB: 괜찮아. 이제 너한테는 15분 빠른 시간을 말해.",
          note:
            "사과를 받아주는 제일 흔한 말이에요. 'Thank you'에 대한 대답으로도 써요. 'No problem'보다 더 캐주얼하고 따뜻해요.",
          register: "casual",
        },
        {
          id: "d17-3",
          phrase: "It's all good.",
          ko: "다 괜찮아. / 문제없어.",
          example: "A: I accidentally ate your leftovers.\nB: It's all good. They were from last month anyway.",
          exampleKo: "A: 네 남은 음식 실수로 먹었어.\nB: 다 괜찮아. 어차피 지난달 거였어.",
          note:
            "'No worries'랑 비슷한데 '진짜 아무 문제 없어, 쿨해'라는 느낌이 더 강해요. 상대가 걱정할 때 이걸로 안심시켜요.",
          register: "casual",
        },
        {
          id: "d17-4",
          phrase: "Didn't mean to.",
          ko: "일부러 그런 거 아니야.",
          example: "A: You just closed my tab with the recipe!\nB: Didn't mean to. I'll find it again. Was it the pasta one?",
          exampleKo: "A: 너 방금 레시피 탭 닫았어!\nB: 일부러 그런 거 아니야. 다시 찾을게. 파스타 거였어?",
          note:
            "'I didn't mean to'에서 'I'를 뺀 거예요. 실수였다는 걸 강조하는 사과. 뒤에 뭘 안 하려 했는지 붙여도 돼요: 'Didn't mean to scare you'.",
          register: "casual",
        },
        {
          id: "d17-5",
          phrase: "Don't worry about it.",
          ko: "신경 쓰지 마. / 괜찮아.",
          example: "A: I still owe you for the pizza.\nB: Don't worry about it. You can get the next one.",
          exampleKo: "A: 나 아직 피자값 안 줬잖아.\nB: 신경 쓰지 마. 다음 거 네가 사면 돼.",
          note:
            "사과나 빚 얘기를 가볍게 끊어주는 말이에요. 'No worries'보다 살짝 더 단호하게 '진짜 괜찮으니까 그만'이라는 느낌.",
          register: "casual",
        },
        {
          id: "d17-6",
          phrase: "It happens.",
          ko: "그럴 수 있지. / 흔한 일이야.",
          example: "A: I called my boss 'mom' in a meeting.\nB: It happens. Mine got called 'babe' once.",
          exampleKo: "A: 회의에서 상사를 '엄마'라고 불렀어.\nB: 그럴 수 있지. 우리 상사는 '자기야'라고 불린 적 있어.",
          note:
            "상대가 창피해할 때 '누구나 그래'라고 다독이는 말이에요. 'It happens to the best of us'가 풀 버전. 어깨 토닥이는 느낌.",
          register: "casual",
        },
        {
          id: "d17-7",
          phrase: "Don't sweat it.",
          ko: "걱정 마. / 땀 흘릴 일 아니야.",
          example: "A: I forgot to bring the cake. For your birthday.\nB: Don't sweat it. We'll put a candle in a donut.",
          exampleKo: "A: 케이크 가져오는 걸 깜빡했어. 네 생일인데.\nB: 걱정 마. 도넛에 초 꽂자.",
          note:
            "'땀 흘리지 마'가 아니라 '스트레스 받지 마'예요. 'Don't worry about it'보다 더 캐주얼하고 친구스러워요.",
          register: "casual",
        },
        {
          id: "d17-8",
          phrase: "I owe you one.",
          ko: "신세 졌어. / 다음에 갚을게.",
          example: "A: I covered your shift so you could go to the concert.\nB: I owe you one. Seriously, name your price.",
          exampleKo: "A: 콘서트 갈 수 있게 내가 네 근무 대신했어.\nB: 신세 졌어. 진짜, 원하는 거 말해.",
          note:
            "도움 받았을 때 고마움을 표현하는 말이에요. 'one'은 'a favor'예요. 사과 뒤에 '보상할게'라는 느낌으로도 써요.",
          register: "casual",
        },
      ],
      roleplay: {
        setting:
          "Sunday afternoon at your friend's apartment. You borrowed their car last night and returned it with an empty tank and a small scratch. Then, during the conversation, they accidentally spill coffee on your bag. Lots of apologies both ways.",
        aiRole:
          "Jamie, a 29-year-old easygoing friend from Nashville who forgives fast but likes to tease. Clumsy, apologizes a lot, warm.",
        userRoleKo: "친구 차를 빌렸다가 상처 낸 사람, 그리고 커피를 맞은 사람",
        goalKo: "내 실수를 사과할 때 2개 이상, 상대 실수를 받아줄 때 3개 이상 서로 다른 표현 쓰기. 마지막에 '신세 졌다'고 말하기.",
        opener: "Hey! So I drove the car this morning and, uh, the gas light was on. And is that scratch new? Be honest.",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 18
    // ──────────────────────────────────────────────────────────────
    {
      day: 18,
      phase: 1,
      title: "Shopping & Money",
      titleKo: "쇼핑과 돈 — 싸다, 비싸다, 내가 살게",
      introKo:
        "돈 얘기는 어색한데 매일 나와요. 가격 평가하기, 계산 나누기, 한턱내기까지. 오늘은 돈 얘기를 쿨하게 하는 표현을 배워요.",
      chunks: [
        {
          id: "d18-1",
          phrase: "That's a steal.",
          ko: "완전 거저네. / 개이득.",
          example: "A: This couch was $40 on Facebook Marketplace.\nB: That's a steal. Did you check it for raccoons?",
          exampleKo: "A: 이 소파 페북 마켓에서 40달러였어.\nB: 완전 거저네. 너구리 있는지는 확인했어?",
          note:
            "'훔친 거'가 아니라 '훔친 것처럼 싸다'는 뜻이에요. 좋은 가격 봤을 때 리액션. 'What a steal'도 같은 뜻.",
          register: "casual",
        },
        {
          id: "d18-2",
          phrase: "What a rip-off.",
          ko: "완전 바가지네.",
          example: "A: $18 for a bottle of water at the stadium.\nB: What a rip-off. I'll just drink my tears.",
          exampleKo: "A: 경기장에서 생수 한 병이 18달러야.\nB: 완전 바가지네. 그냥 내 눈물 마실게.",
          note:
            "'rip off'는 바가지 씌우다예요. 'They ripped me off'는 '나 바가지 썼어'. 비싸고 가치 없을 때 쓰는 투덜거림.",
          register: "casual",
        },
        {
          id: "d18-3",
          phrase: "That's pricey.",
          ko: "그거 좀 비싸다.",
          example: "A: The omakase is $200 a person.\nB: That's pricey. I'll have the omakase of my fridge instead.",
          exampleKo: "A: 오마카세가 1인당 200달러야.\nB: 좀 비싸다. 난 우리 냉장고 오마카세로 할게.",
          note:
            "'expensive'보다 가볍고 귀엽게 '좀 비싸네' 하는 말이에요. 바가지는 아닌데 지갑이 아플 때. 'a bit pricey'로도 많이 써요.",
          register: "casual",
        },
        {
          id: "d18-4",
          phrase: "Let's split the bill.",
          ko: "계산 나누자. / 더치페이 하자.",
          example: "A: Let's split the bill.\nB: Sure. Evenly, or by who ate the whole appetizer?",
          exampleKo: "A: 계산 나누자.\nB: 좋아. 똑같이, 아니면 애피타이저 다 먹은 사람 기준으로?",
          note:
            "'Dutch pay'는 미국에서 안 써요! 'split the bill' 또는 'split it'이 맞는 표현. 'Let's go halves'도 가끔 들려요.",
          register: "neutral",
        },
        {
          id: "d18-5",
          phrase: "It's on me.",
          ko: "내가 살게. / 내가 쏠게.",
          example: "A: Put your wallet away. It's on me tonight.\nB: Wait, really? Then I'm ordering the lobster.",
          exampleKo: "A: 지갑 넣어. 오늘은 내가 살게.\nB: 잠깐, 진짜? 그럼 나 랍스터 시킨다.",
          note:
            "'내 위에 있다'가 아니라 '내가 낸다'예요. 'My treat'도 같은 뜻. 'It's on the house'는 가게가 공짜로 준다는 뜻이에요.",
          register: "casual",
        },
        {
          id: "d18-6",
          phrase: "I'm broke.",
          ko: "나 돈 없어. / 거지야.",
          example: "A: Vegas trip next month?\nB: I'm broke. I'm eating rice and vibes until payday.",
          exampleKo: "A: 다음 달 베가스 여행?\nB: 나 돈 없어. 월급날까지 밥이랑 분위기로 버티는 중이야.",
          note:
            "'고장났다'가 아니라 '돈이 없다'예요. 'I'm poor'는 심각하게 들리고 'I'm broke'는 '이번 달 돈 없어' 정도의 가벼운 느낌.",
          register: "casual",
        },
        {
          id: "d18-7",
          phrase: "Is this on sale?",
          ko: "이거 세일 중이에요?",
          example: "A: Is this on sale? The tag says two different prices.\nB: Yeah, it's 30% off. The other tag is from 2019.",
          exampleKo: "A: 이거 세일 중이에요? 태그에 가격이 두 개예요.\nB: 네, 30% 할인이요. 다른 태그는 2019년 거예요.",
          note:
            "'on sale'은 세일 중, 'for sale'은 판매 중이에요. 헷갈리기 쉬워요. 매장에서 직원한테 바로 던질 수 있는 질문.",
          register: "neutral",
        },
        {
          id: "d18-8",
          phrase: "I'm just looking.",
          ko: "그냥 둘러보는 중이에요.",
          example: "A: Can I help you find anything?\nB: I'm just looking, thanks. Pretending I can afford things.",
          exampleKo: "A: 찾으시는 거 있으세요?\nB: 그냥 둘러보는 중이에요, 감사해요. 살 수 있는 척하는 중이에요.",
          note:
            "직원이 다가올 때 쓰는 국민 대답이에요. 'thanks'를 붙이면 부드러워요. 'Just browsing'도 같은 뜻.",
          register: "neutral",
        },
      ],
      roleplay: {
        setting:
          "A Saturday afternoon at an outdoor mall with a friend. You're browsing a clothing store, then grabbing lunch. Prices are all over the place and the bill needs sorting out at the end.",
        aiRole:
          "Riley, a 28-year-old bargain-hunting friend from Phoenix who comments on every price. Funny, a little dramatic about money, generous when it counts. Also plays the store clerk and the server when needed.",
        userRoleKo: "친구와 쇼핑하고 점심 먹는 사람",
        goalKo: "가격 리액션 3개 이상, 직원 응대 1개 이상, 계산할 때 표현 1개 이상 쓰기. 한 번은 내가 산다고 하고, 한 번은 나누자고 하기.",
        opener: "Okay, look at this jacket. It's gorgeous, right? Now look at the price tag. Tell me what you think.",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 19
    // ──────────────────────────────────────────────────────────────
    {
      day: 19,
      phase: 1,
      title: "Phone & Directions",
      titleKo: "전화와 길 안내 — 끊기고, 못 듣고, 찾아가기",
      introKo:
        "전화는 얼굴이 안 보여서 더 어려워요. 끊길 때, 바쁠 때, 어디냐고 물을 때 쓰는 말이 따로 있어요. 오늘은 전화 + 길 찾기 생존 표현을 배워요.",
      chunks: [
        {
          id: "d19-1",
          phrase: "Hang on.",
          ko: "잠깐만. / 기다려봐.",
          example: "A: Hang on, someone's at the door.\nB: If it's a package, open it on speaker.",
          exampleKo: "A: 잠깐만, 누가 문 앞에 왔어.\nB: 택배면 스피커폰으로 열어봐.",
          note:
            "'매달리다'가 아니라 '잠깐 기다려'예요. 'Hold on'이랑 똑같은 뜻. 전화 중에 잠깐 멈출 때, 또는 '잠깐, 뭐라고?' 하고 놀랄 때도 써요.",
          register: "casual",
        },
        {
          id: "d19-2",
          phrase: "You're breaking up.",
          ko: "소리가 끊겨. / 잘 안 들려.",
          example: "A: So the meeting is at... bzzt... and bring... bzzt...\nB: You're breaking up. Text me instead.",
          exampleKo: "A: 그래서 회의는... 지직... 그리고 가져와... 지직...\nB: 소리가 끊겨. 그냥 문자로 보내.",
          note:
            "'헤어진다'가 아니에요! 전화 신호가 끊긴다는 뜻. 'break up'은 문맥에 따라 완전 다른 뜻이 되니까 전화 중이면 무조건 이 뜻이에요.",
          register: "neutral",
        },
        {
          id: "d19-3",
          phrase: "Hit me up.",
          ko: "연락해. / 콜 해.",
          example: "A: I'm in your area next week.\nB: Hit me up. I'll show you the good taco spot.",
          exampleKo: "A: 다음 주에 네 동네 가.\nB: 연락해. 맛있는 타코집 보여줄게.",
          note:
            "'때려'가 아니라 '연락해'예요. 'Call me'보다 훨씬 캐주얼. 문자에선 'hmu'로 줄여요. 헤어질 때 'Hit me up sometime'으로 자주 써요.",
          register: "slang",
        },
        {
          id: "d19-4",
          phrase: "It's down the street.",
          ko: "이 길 따라가면 있어요.",
          example: "A: Where's the pharmacy?\nB: It's down the street, next to the place with the sad mannequin.",
          exampleKo: "A: 약국 어디예요?\nB: 이 길 따라가면 있어요, 슬픈 마네킹 있는 가게 옆에요.",
          note:
            "'아래쪽'이 아니라 '이 길을 따라 조금 가면'이에요. 'up the street'도 똑같은 뜻으로 써요. 미국인들 길 알려줄 때 제일 많이 쓰는 말.",
          register: "neutral",
        },
        {
          id: "d19-5",
          phrase: "Can't talk right now.",
          ko: "지금 통화 못 해.",
          example: "A: Hey, got a minute?\nB: Can't talk right now. In a meeting, pretending to take notes.",
          exampleKo: "A: 야, 잠깐 시간 돼?\nB: 지금 통화 못 해. 회의 중, 필기하는 척하는 중.",
          note:
            "'I' 빼고 말해요. 전화 받자마자 또는 문자로 보내는 말. 뒤에 'I'll call you back'을 붙이면 완벽해요.",
          register: "casual",
        },
        {
          id: "d19-6",
          phrase: "Shoot me a text.",
          ko: "문자 하나 보내줘.",
          example: "A: What's the address again?\nB: I'll shoot you a text. Easier than spelling it out loud.",
          exampleKo: "A: 주소 뭐라고 했지?\nB: 문자로 보내줄게. 소리 내서 철자 말하는 것보다 쉬워.",
          note:
            "'쏘다'가 아니라 '빨리 보내다'예요. 'Send me a text'보다 캐주얼하고 가벼워요. 'Shoot me an email'로도 써요.",
          register: "casual",
        },
        {
          id: "d19-7",
          phrase: "Where are you at?",
          ko: "너 지금 어디야?",
          example: "A: Where are you at? I don't see you.\nB: By the fountain. Wearing the hat you hate.",
          exampleKo: "A: 지금 어디야? 안 보여.\nB: 분수 옆. 네가 싫어하는 모자 쓰고.",
          note:
            "문법적으론 'at'이 없어야 하는데 실제로는 다 붙여서 말해요. 'Where are you?'보다 더 '정확히 어디?'라는 느낌. 발음은 'Where you at?'.",
          register: "casual",
        },
        {
          id: "d19-8",
          phrase: "Take a left at ...",
          ko: "~에서 왼쪽으로 꺾어.",
          example: "A: How do I get to your place?\nB: Take a left at the gas station. If you see a goat, you went too far.",
          exampleKo: "A: 너네 집 어떻게 가?\nB: 주유소에서 왼쪽으로 꺾어. 염소가 보이면 너무 멀리 간 거야.",
          note:
            "'Turn left'보다 'Take a left'가 더 구어체예요. 'Take a right', 'Go straight', 'It's on your right'까지 세트로 외우세요.",
          register: "neutral",
        },
      ],
      roleplay: {
        setting:
          "You're trying to find your friend's new apartment for the first time on a Friday evening. The signal is bad, you're a bit lost, and they're on the phone guiding you while also being distracted by their dog.",
        aiRole:
          "Taylor, a 27-year-old friend who just moved to a confusing neighborhood in Atlanta. Gives directions with landmarks instead of street names, gets distracted, phone keeps cutting out.",
        userRoleKo: "친구 집을 처음 찾아가는 길 잃은 사람",
        goalKo: "통화 끊길 때, 못 들을 때, 위치 물을 때 오늘 표현 4개 이상 쓰기. 길 안내 받아서 도착까지 하고, 마지막에 문자 보내달라고 하기.",
        opener: "Hey! Are you close? Okay so where are you at right now? Describe what you see. Hang on, the dog's barking at a leaf.",
      },
    },

    // ──────────────────────────────────────────────────────────────
    // DAY 20 — BOSS
    // ──────────────────────────────────────────────────────────────
    {
      day: 20,
      phase: 1,
      title: "Hanging Out With a New Friend",
      titleKo: "보스전: 새 친구랑 놀기 — 만나서 헤어질 때까지 풀코스",
      introKo:
        "Phase 1 마지막 보스예요. 만나서, 뭐 먹을지 정하고, 주문하고, 한 주 얘기하고, 계산하고, 다음 약속까지. 20일 동안 배운 걸 전부 꺼내야 해요. 오늘 chunk는 흐름을 넘기고 마무리하는 표현들이에요.",
      boss: true,
      chunks: [
        {
          id: "d20-1",
          phrase: "What are you in the mood for?",
          ko: "뭐 먹고 싶어? / 뭐 땡겨?",
          example: "A: What are you in the mood for?\nB: Something greasy. I had a salad yesterday and I'm still angry about it.",
          exampleKo: "A: 뭐 땡겨?\nB: 기름진 거. 어제 샐러드 먹었는데 아직도 화나.",
          note:
            "'What do you want to eat?'보다 훨씬 자연스러운 메뉴 질문이에요. 음식뿐 아니라 영화, 활동에도 써요: 'in the mood for a comedy'.",
          register: "casual",
        },
        {
          id: "d20-2",
          phrase: "Wanna just wing it?",
          ko: "그냥 즉흥으로 갈까?",
          example: "A: I didn't book anything. Wanna just wing it?\nB: Always. Planning is for people with their lives together.",
          exampleKo: "A: 아무것도 예약 안 했어. 그냥 즉흥으로 갈까?\nB: 항상 그렇지. 계획은 인생 정리된 사람들이나 하는 거야.",
          note:
            "'wing it'은 준비 없이 즉흥으로 한다는 뜻이에요. 계획 없을 때 쿨하게 넘기는 제안. 'I'll just wing it'은 '그냥 대충 해볼게'.",
          register: "casual",
        },
        {
          id: "d20-3",
          phrase: "Should we head out?",
          ko: "슬슬 나갈까? / 이제 갈까?",
          example: "A: Should we head out? They're stacking chairs around us.\nB: Yeah, I think that's a sign.",
          exampleKo: "A: 슬슬 나갈까? 우리 주변에서 의자 쌓고 있어.\nB: 응, 그게 신호인 것 같아.",
          note:
            "'head out'은 '출발하다, 나가다'예요. 자리를 뜨자고 제안하는 가장 부드러운 방법. 'head home'은 집에 가자, 'head over'는 어디로 가자.",
          register: "casual",
        },
        {
          id: "d20-4",
          phrase: "I'm gonna take off.",
          ko: "나 이제 갈게.",
          example: "A: I'm gonna take off. Early meeting tomorrow.\nB: Boo. Fine. Text me when you get home.",
          exampleKo: "A: 나 이제 갈게. 내일 아침 일찍 회의야.\nB: 에이. 알겠어. 집 도착하면 문자해.",
          note:
            "'이륙하다'가 아니라 '자리를 뜨다'예요. 'I should get going'보다 더 캐주얼. 친구 모임에서 먼저 일어날 때 딱이에요.",
          register: "casual",
        },
        {
          id: "d20-5",
          phrase: "Let's do this again.",
          ko: "우리 또 이렇게 보자.",
          example: "A: Let's do this again. Like, soon.\nB: Deal. Same place, less dessert. Just kidding, more dessert.",
          exampleKo: "A: 우리 또 이렇게 보자. 곧.\nB: 콜. 같은 장소, 디저트는 덜. 농담이야, 디저트 더.",
          note:
            "헤어질 때 '재밌었다, 또 보자'는 뜻이에요. 'We should do this again sometime'이 풀 버전인데 'sometime'이 붙으면 좀 빈말 느낌.",
          register: "casual",
        },
        {
          id: "d20-6",
          phrase: "I'll text you.",
          ko: "문자할게.",
          example: "A: When are you free next week?\nB: Not sure yet. I'll text you once I know.",
          exampleKo: "A: 다음 주 언제 시간 돼?\nB: 아직 몰라. 알게 되면 문자할게.",
          note:
            "약속을 바로 못 정할 때 쓰는 마무리 말이에요. 진심이면 뒤에 'tonight', 'tomorrow'를 붙여요. 아무것도 안 붙이면 안 올 수도 있다는 뜻(미국인 농담).",
          register: "casual",
        },
        {
          id: "d20-7",
          phrase: "Let me know when you're free.",
          ko: "시간 될 때 알려줘.",
          example: "A: Let me know when you're free. I'll plan the whole thing.\nB: Dangerous offer. Saturday?",
          exampleKo: "A: 시간 될 때 알려줘. 내가 다 계획할게.\nB: 위험한 제안인데. 토요일?",
          note:
            "다음 약속의 공을 상대에게 넘기는 표현이에요. 'Let me know'는 '알려줘'라는 만능 덩어리. 'Let me know what you think'로도 응용.",
          register: "neutral",
        },
        {
          id: "d20-8",
          phrase: "Get home safe.",
          ko: "조심히 들어가.",
          example: "A: Alright, get home safe!\nB: You too. Don't fall asleep on the train again.",
          exampleKo: "A: 자, 조심히 들어가!\nB: 너도. 기차에서 또 잠들지 말고.",
          note:
            "밤에 헤어질 때 꼭 하는 말이에요. 'Bye'만 하면 뭔가 빠진 느낌. 'Text me when you get home'이랑 세트로 쓰면 완전 미국 친구.",
          register: "casual",
        },
      ],
      roleplay: {
        setting:
          "Friday at 6:30 p.m. You're meeting a new friend — someone you met at a work event two weeks ago — for the first proper hangout. You meet outside a subway station, decide where to eat, order, chat about your weeks, split the bill, and say goodbye. The AI plays the friend and, when needed, the server.",
        aiRole:
          "Casey, a 28-year-old friendly, slightly goofy product designer from Austin. Easy to talk to, asks lots of questions, indecisive about food, has had a chaotic week and wants to hear about yours. Also plays a quick-moving server during ordering.",
        userRoleKo: "케이시와 처음 제대로 노는 새 친구",
        goalKo: "미션 6단계: (1) 만나서 인사 + 근황 묻기 (2) 뭐 먹을지 의견 주고받으며 정하기 (3) 직원에게 주문 + 리액션 (4) 내 한 주 얘기하고 상대 얘기에 리액션/되묻기 (5) 계산 나누거나 한턱 내기 (6) 다음 약속 느슨하게 잡고 작별. 오늘 chunk 5개 이상 + Phase 1 전체에서 10개 이상 쓰기.",
        opener: "Hey, you made it! Okay, I have zero plan, I'm starving, and my week was a disaster. How've you been? And what are you in the mood for?",
      },
    },
  ],
};

export default phase1;
