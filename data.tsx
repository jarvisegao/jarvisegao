import React from 'react';
import { 
  MessageSquare, Activity, BarChart3, Link as LinkIcon, 
  Smartphone, Shield, Clock 
} from 'lucide-react';
import { ContentData } from './types';

export const content: Record<'zh' | 'en', ContentData> = {
  zh: {
    nav: {
      product: "产品矩阵",
      technology: "核心技术",
      solutions: "解决方案",
      pricing: "RaaS模式",
      about: "关于我们",
      contact: "预约演示",
      cases: "客户案例"
    },
    hero: {
      badge: "🚀 下一代服务业数字劳动力",
      title: "不仅仅是对话，\n更是能干活的执行者",
      subtitle: "Logeek 数字员工连接您的 PMS、IoT 和 CRM 系统。它们不仅能回答客人的问题，更能自动调度服务、控制设备并完成复杂的运营任务。",
      cta_primary: "预约产品演示",
      cta_secondary: "查看技术架构",
      demo: {
        user_avatar: "Guest",
        agent_avatar: "Logeek",
        user_text: "能不能送两瓶水？另外房间空调好像坏了，太热。还有，顺便叫阿姨打扫下房间。",
        process_steps: [
          { type: 'think', text: '多意图识别: 1.客需送物(水) 2.工程报修(空调) 3.客房清扫' },
          { type: 'check', text: '库存检查: 饮用水 (充足) | 房态检查: 在住 (脏房)' },
          { type: 'action', text: '并行调度: 机器人任务 #8392 (送水)' },
          { type: 'action', text: '并行调度: 工程工单 #REP-001 (P1 紧急)' },
          { type: 'action', text: '并行调度: 客房保洁任务 #CLN-045 (全清)' },
          { type: 'reply', text: '回复客人: 确认三项服务的预计到达时间' }
        ],
        final_reply: "收到，已为您安排：\n1. 机器人小贝正在送水，预计5分钟到达。\n2. 工程部师傅已接单，立刻上门检修空调。\n3. 保洁阿姨已收到通知，稍后为您打扫房间。"
      }
    },
    comparison: {
      title: "为什么选择 Logeek？",
      subtitle: "从“闲聊机器人”进化为“业务执行专家”",
      traditional: {
        title: "传统客服机器人",
        items: [
          "仅能回答预设的静态问答",
          "无法连接业务系统，数据孤岛",
          "遇到复杂问题只能转人工",
          "按坐席或软件授权收费"
        ]
      },
      logeek: {
        title: "Logeek 数字员工",
        items: [
          "具备推理能力，处理复杂模糊指令",
          "连接 200+ 系统 (PMS/IoT)，直接执行任务",
          "自动闭环 95% 的高频服务场景",
          "RaaS 模式：按服务结果付费"
        ]
      }
    },
    matrix: {
      title: "全场景多智能体矩阵",
      subtitle: "专为空间运营打造的 AI 团队，各司其职，协同工作。",
      agents: [
        {
          role: "数字管家",
          focus: "C端体验 (Experience)",
          desc: "7x24小时在线的贴身管家。处理客房送物、设施咨询、发票开具。直接控制房间灯光、窗帘与空调。",
          icon: <MessageSquare className="w-6 h-6" />,
          color: "bg-blue-100 text-blue-600"
        },
        {
          role: "数字店长",
          focus: "B端运营 (Operations)",
          desc: "不仅派单，更负责跟单。自动调度保洁、工程与安保，监控SLA（服务等级协议），确保任务不超时。",
          icon: <Activity className="w-6 h-6" />,
          color: "bg-green-100 text-green-600"
        },
        {
          role: "数字董秘",
          focus: "集团决策 (Decision)",
          desc: "基于全量数据的经营参谋。实时分析入住率、RevPAR 趋势，主动预警经营风险并提供策略建议。",
          icon: <BarChart3 className="w-6 h-6" />,
          color: "bg-purple-100 text-purple-600"
        }
      ]
    },
    bento: {
      title: "为“执行”而生的技术架构",
      cards: [
        {
          title: "200+ 原生集成",
          desc: "深度对接华住、石基等主流 PMS 及涂鸦、小米等 IoT 平台。",
          col: "md:col-span-2",
          icon: <LinkIcon className="w-6 h-6" />,
          bg: "bg-gray-900 text-white"
        },
        {
          title: "多模态感知",
          desc: "理解语音、文本，甚至能“看懂”设备状态图片。",
          col: "md:col-span-1",
          icon: <Smartphone className="w-6 h-6" />,
          bg: "bg-gray-50"
        },
        {
          title: "企业级安全护栏",
          desc: "私有化部署选项，数据加密，杜绝 AI 幻觉风险。",
          col: "md:col-span-1",
          icon: <Shield className="w-6 h-6" />,
          bg: "bg-gray-50"
        },
        {
          title: "RaaS 计费引擎",
          desc: "Result as a Service。任务成功才收费，让 AI 为结果负责。",
          col: "md:col-span-2",
          icon: <Clock className="w-6 h-6" />,
          bg: "bg-blue-600 text-white"
        }
      ]
    },
    cases: {
      title: "头部客户的共同选择",
      list: [
        {
          id: 1,
          tag: "全球 Top 5 酒店集团",
          title: "客服工作量降低 30%，响应速度提升 20 倍",
          desc: "面对海量住客咨询，Logeek 数字员工接管了 80% 的重复性问题，并将平均响应时间从 2 分钟压缩至 5 秒以内。",
          stat: "30%",
          statLabel: "人力成本节省"
        },
        {
          id: 2,
          tag: "国际顶级主题乐园",
          title: "打破“酒店+园区”的服务割裂",
          desc: "通过统一的 AI 入口，实现了从酒店客房到园区餐饮的无缝连接。游客可以用自然语言查询路线、预订餐厅并控制客房设备。",
          stat: "95%",
          statLabel: "意图识别准确率"
        }
      ]
    },
    footer: {
      slogan: "让服务业拥有可规模化的数字生产力",
      copyright: "© 2024 Logeek Tech. All rights reserved."
    }
  },
  en: {
    nav: {
      product: "Products",
      technology: "Technology",
      solutions: "Solutions",
      pricing: "RaaS Model",
      about: "About",
      contact: "Book Demo",
      cases: "Cases"
    },
    hero: {
      badge: "🚀 Next-Gen Digital Workforce",
      title: "Beyond Chat.\nAI That Executes.",
      subtitle: "Logeek digital employees connect with your PMS, IoT, and CRM. They don't just answer questions—they dispatch services, control devices, and close tickets.",
      cta_primary: "Request Demo",
      cta_secondary: "View Architecture",
      demo: {
        user_avatar: "Guest",
        agent_avatar: "Logeek",
        user_text: "Can I get 2 bottles of water? Also, the AC seems broken, it's too hot. And please send housekeeping to clean the room.",
        process_steps: [
          { type: 'think', text: 'Multi-Intent: 1.Amenities 2.Maintenance 3.Housekeeping' },
          { type: 'check', text: 'Check Inventory: Water (OK) | Check Room Status: Dirty' },
          { type: 'action', text: 'Parallel Dispatch: Robot Task #8392 (Water)' },
          { type: 'action', text: 'Parallel Dispatch: Work Order #REP-001 (AC)' },
          { type: 'action', text: 'Parallel Dispatch: Cleaning Task #CLN-045' },
          { type: 'reply', text: 'Reply: Confirm all 3 service arrangements' }
        ],
        final_reply: "Understood, arranged for you:\n1. Robot Bei is bringing water (5 mins).\n2. Engineering dispatched for AC repair.\n3. Housekeeping has been notified to clean."
      }
    },
    comparison: {
      title: "Why Logeek?",
      subtitle: "Evolution from 'Chatbots' to 'Service Executors'",
      traditional: {
        title: "Traditional Chatbots",
        items: [
          "Can only answer static FAQs",
          "Disconnected from business systems",
          "Escalates all complex queries to humans",
          "Charged by seat or software license"
        ]
      },
      logeek: {
        title: "Logeek Digital Employees",
        items: [
          "Reasoning engine for complex requests",
          "Connects 200+ systems (PMS/IoT) to act",
          "Automates 95% of frequent scenarios",
          "RaaS: Pay only for successful results"
        ]
      }
    },
    matrix: {
      title: "Multi-Agent Matrix",
      subtitle: "A specialized AI team for spatial operations, working in synergy.",
      agents: [
        {
          role: "Digital Butler",
          focus: "Experience (C-Side)",
          desc: "24/7 personal assistant. Handles amenities, invoices, and directly controls room lighting, curtains, and climate.",
          icon: <MessageSquare className="w-6 h-6" />,
          color: "bg-blue-100 text-blue-600"
        },
        {
          role: "Digital Manager",
          focus: "Operations (B-Side)",
          desc: "Dispatches and tracks. Coordinates housekeeping, engineering, and security, monitoring SLAs to ensure compliance.",
          icon: <Activity className="w-6 h-6" />,
          color: "bg-green-100 text-green-600"
        },
        {
          role: "Digital Secretary",
          focus: "Decision (Group)",
          desc: "Strategic advisor based on full data. Analyzes occupancy and RevPAR trends, alerting risks proactively.",
          icon: <BarChart3 className="w-6 h-6" />,
          color: "bg-purple-100 text-purple-600"
        }
      ]
    },
    bento: {
      title: "Built for Execution",
      cards: [
        {
          title: "200+ Integrations",
          desc: "Deep integration with major PMS (Opera, Shiji) and IoT platforms.",
          col: "md:col-span-2",
          icon: <LinkIcon className="w-6 h-6" />,
          bg: "bg-gray-900 text-white"
        },
        {
          title: "Multi-modal",
          desc: "Understands voice, text, and even images of equipment status.",
          col: "md:col-span-1",
          icon: <Smartphone className="w-6 h-6" />,
          bg: "bg-gray-50"
        },
        {
          title: "Enterprise Guardrails",
          desc: "Private deployment options, encryption, and hallucination prevention.",
          col: "md:col-span-1",
          icon: <Shield className="w-6 h-6" />,
          bg: "bg-gray-50"
        },
        {
          title: "RaaS Pricing",
          desc: "Result as a Service. You only pay when the AI successfully completes a task.",
          col: "md:col-span-2",
          icon: <Clock className="w-6 h-6" />,
          bg: "bg-blue-600 text-white"
        }
      ]
    },
    cases: {
      title: "Trusted by Leaders",
      list: [
        {
          id: 1,
          tag: "Global Top 5 Hotel Group",
          title: "30% Less Workload, 20x Faster Response",
          desc: "Logeek handled 80% of repetitive guest inquiries, reducing average response time from 2 minutes to under 5 seconds.",
          stat: "30%",
          statLabel: "Cost Reduction"
        },
        {
          id: 2,
          tag: "Top International Theme Park",
          title: "Seamless Park-to-Hotel Experience",
          desc: "Unified AI interface connecting hotel rooms to park dining. Guests use natural language to book tables and control room devices.",
          stat: "95%",
          statLabel: "Intent Accuracy"
        }
      ]
    },
    footer: {
      slogan: "Scalable Digital Productivity for Service Industries",
      copyright: "© 2024 Logeek Tech. All rights reserved."
    }
  }
};