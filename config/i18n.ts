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
    role: 'Founder of HackathonWeekly / Full-stack Developer',
    nav: {
      home: 'Home',
      projects: 'Projects',
      community: 'Community',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
    },
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
      aiNote: 'Examples of projects I completed with AI in 20-120 minutes',
      tools: 'Tools',
      items: {
        hackweek: {
          title: 'HackathonWeekly',
          description: 'Weekly hackathon community for rapid product development',
          url: 'https://hackathonweekly.com',
        },
        voiceClone: {
          title: 'Voice Clone Studio',
          description: 'Create your digital voice twin in minutes',
          note: 'Built in 90 minutes with ChatGPT',
        },
        imageGen: {
          title: 'AI Image Generator',
          description: 'Generate and edit images with natural language',
          note: 'Built in 60 minutes with Claude',
        },
        codeHelper: {
          title: 'Code Assistant',
          description: 'AI-powered code generation and debugging tool',
          note: 'Built in 120 minutes with GPT-4',
        },
      },
    },
    community: {
      hackweek: {
        title: 'HackathonWeekly',
        description: 'Take 1 week to create 1 MVP, solve 1 pain point, and maybe it will be the next world-changing product. Founded by Jackie Xiao.',
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
      description: 'Feel free to reach out via email for collaborations, questions, or just to say hi!',
      tips: 'Quick Tips',
      tip1: 'Please include a brief introduction about yourself',
      tip2: 'Mention the purpose of your email for faster response',
      copied: 'Email copied to clipboard!',
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
      2: ' AI tools significantly accelerated our MVP development process. Jackie\'s vision for rapid product development is revolutionary.',
      3: 'The community Jackie built is incredibly supportive. Everyone helps each other grow and succeed.',
    },
  },
  zh: {
    name: 'Jackie Xiao',
    chineseName: '肖鉴津',
    motto: '爱与自由，毕生所求；学与创造，至死方休',
    role: ' 周周黑客松发起人 / 全栈工程师',
    nav: {
      home: '首页',
      projects: '项目',
      community: '社区',
      about: '关于',
      blog: '博客',
      contact: '联系',
    },
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
      aiNote: '使用 AI 在20-120分钟内完成的项目示例',
      tools: '工具',
      items: {
        hackweek: {
          title: '周周黑客松',
          description: '快速产品开发的每周黑客松社区',
          url: 'https://hackathonweekly.com',
        },
        voiceClone: {
          title: '声音克隆工作室',
          description: '几分钟内创建你的数字声音分身',
          note: '使用ChatGPT在90分钟内完成',
        },
        imageGen: {
          title: 'AI图像生成器',
          description: '使用自然语言生成和编辑图片',
          note: '使用Claude在60分钟内完成',
        },
        codeHelper: {
          title: '代码助手',
          description: 'AI驱动的代码生成和调试工具',
          note: '使用GPT-4在120分钟内完成',
        },
      },
    },
    community: {
      hackweek: {
        title: '周周黑客松',
        description: '花1周时间，创造1个最小可行产品，解决1个生活痛点，也许就是下1个改变世界的起点。由Jackie Xiao发起。',
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
      description: '欢迎通过邮件联系我，无论是合作、提问，还是打个招呼！',
      tips: '小贴士',
      tip1: '请简单介绍一下自己',
      tip2: '说明邮件目的，以便更快收到回复',
      copied: '邮箱已复制到剪贴板！',
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
      2: 'AI工具显著加快了我们的MVP开发过程。Jackie对快速产品开发的愿景是革命性的。',
      3: 'Jackie建立的社区非常有支持性。每个人都在互相帮助，共同成长。',
    },
  },
} as const
