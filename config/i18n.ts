export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'zh'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const dictionaries = {
  en: {
    name: 'Jackie Xiao',
    chineseName: '肖鉴津',
    motto: 'Love and freedom, lifelong pursuit; learning and creation, until death',
    role: 'Founder of 01MVP / Voice Algorithm Engineer / Full-stack Developer',
    about: {
      title: 'About Me',
      description: 'A curious tech enthusiast who loves building products',
      traits: [
        'Curious about unknown things',
        'Positive nihilism',
        'Buddhist-like attitude',
        'Tech enthusiast',
        'INTJ personality',
        'Rick and Morty fan',
        'Digital product lover',
        'Programmer',
      ],
    },
    projects: {
      title: 'Projects',
      aiProjects: 'AI-Powered Projects',
      tools: 'Tools',
    },
    community: {
      hackweek: {
        title: 'HackathonWeekly',
        description: 'Take 1 week to create 1 MVP, solve 1 pain point, and maybe it will be the next world-changing product',
      },
      mvp: {
        title: '01MVP',
        description: 'From 0 to 1, turn ideas into products quickly. AI-driven tools and creator community to help makers build MVPs in the shortest time.',
      },
    },
    skills: {
      title: 'Skills',
      tts: {
        description: 'Expert in TTS technology, specializing in voice cloning and synthesis',
      },
      voiceCloning: {
        description: 'Deep understanding of voice cloning techniques and implementations',
      },
      python: {
        description: 'Extensive experience in Python development and ML frameworks',
      },
      ml: {
        description: 'Proficient in machine learning algorithms and deep learning',
      },
      nextjs: {
        description: 'Building modern web applications with Next.js and React',
      },
      react: {
        description: 'Creating interactive and responsive user interfaces',
      },
    },
    contact: {
      title: 'Contact Me',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message Sent',
      successMessage: 'Thanks for reaching out! I will get back to you soon.',
      error: 'Error',
      errorMessage: 'Failed to send message. Please try again.',
    },
    testimonials: {
      title: 'Community Feedback',
      1: 'Jackie helped me turn my idea into a working product in just one week through HackWeek. His guidance was invaluable!',
      2: '01MVP\'s AI tools significantly accelerated our MVP development process. Jackie\'s vision for rapid product development is revolutionary.',
      3: 'The community Jackie built is incredibly supportive. Everyone helps each other grow and succeed.',
    },
  },
  zh: {
    name: '肖鉴津',
    chineseName: '肖鉴津',
    motto: '爱与自由，毕生所求；学与创造，至死方休',
    role: '少错科技创始人 / 语音算法工程师 / 全栈工程师',
    about: {
      title: '关于我',
      description: '热爱探索和创造的技术爱好者',
      traits: [
        '对所有未知事物充满好奇心',
        '积极的虚无主义',
        '佛系随缘',
        '技术宅',
        'INTJ性格',
        '瑞克和莫蒂粉丝',
        '数码产品爱好者',
        '程序员',
      ],
    },
    projects: {
      title: '项目',
      aiProjects: 'AI驱动的项目',
      tools: '工具',
    },
    community: {
      hackweek: {
        title: '周周黑客松',
        description: '花1周时间，创造1个最小可行产品，解决1个生活痛点，也许就是下1个改变世界的起点',
      },
      mvp: {
        title: '01MVP',
        description: '从0到1，让创意快速变成产品。01MVP 通过 AI 驱动的工具和创造者社区，帮助创造者用最短时间打造最小可行产品（MVP）。',
      },
    },
    skills: {
      title: '技能',
      tts: {
        description: '语音合成技术专家，专注于声音克隆和合成',
      },
      voiceCloning: {
        description: '深入理解声音克隆技术及其实现',
      },
      python: {
        description: '丰富的Python开发经验和机器学习框架使用经验',
      },
      ml: {
        description: '精通机器学习算法和深度学习',
      },
      nextjs: {
        description: '使用Next.js和React构建现代Web应用',
      },
      react: {
        description: '创建交互式和响应式用户界面',
      },
    },
    contact: {
      title: '联系我',
      name: '姓名',
      email: '邮箱',
      message: '留言',
      send: '发送消息',
      sending: '发送中...',
      success: '消息已发送',
      successMessage: '感谢您的留言！我会尽快回复。',
      error: '错误',
      errorMessage: '发送失败，请重试。',
    },
    testimonials: {
      title: '社区反馈',
      1: '通过周周黑客松，Jackie帮助我在一周内将想法变成了可用的产品。他的指导非常宝贵！',
      2: '01MVP的AI工具显著加快了我们的MVP开发过程。Jackie对快速产品开发的愿景是革命性的。',
      3: 'Jackie建立的社区非常有支持性。每个人都在互相帮助，共同成长。',
    },
  },
} as const
