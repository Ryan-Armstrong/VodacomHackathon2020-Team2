App({
  data: {
    selectedUser: {},
    selectedBundle: {},
    selectedExtraBundle: {},
    selectedPhone: {},
    selectedContract: {},
    users: [
      {
        name: "Greg",
        number: "0762400524",
        dataBundles: [
          {
            bundleType: "Data bundle",
            discount: 14,
            bundleSize: "1GB",
            amount: 25,
            valid: "1 day",
            validText: "use today only"
          },
          {
            bundleType: "Data bundle",
            discount: 50,
            bundleSize: "5GB",
            amount: 159,
            valid: "7 days",
            validText: "use within 7 days"
          },
          {
            bundleType: "Data bundle",
            discount: 55,
            bundleSize: "40MB",
            amount: 25,
            valid: "1 day",
            validText: "use today only"
          },
          {
            bundleType: "Data bundle",
            discount: 36,
            bundleSize: "100MB",
            amount: 15,
            valid: "7 days",
            validText: "use within 7 days"
          },
          {
            bundleType: "Data bundle",
            discount: 30,
            bundleSize: "500MB",
            amount: 45,
            valid: "7 days",
            validText: "use within 7 days"
          },
          {
            bundleType: "Data bundle",
            discount: 55,
            bundleSize: "750MB",
            amount: 60,
            valid: "7 days",
            validText: "use within 7 days"
          }
        ],
        ticketBundles: [
          {
            bundleType: "Ticket bundle",
            discount: 25,
            bundleSize: "750MB",
            bundleName: "YouTube",
            amount: 35,
            valid: "7 days",
            validText: "use within 7 days"
          },
          {
            bundleType: "Ticket bundle",
            discount: 35,
            bundleSize: "1GB",
            bundleName: "Social",
            amount: 8,
            valid: "1 day",
            validText: "use today only"
          },
          {
            bundleType: "Ticket bundle",
            discount: 20,
            bundleSize: "100MB",
            bundleName: "WhatsApp",
            amount: 6,
            valid: "3 days",
            validText: "use within 3 days"
          },
          {
            bundleType: "Ticket bundle",
            discount: 40,
            bundleSize: "2GB",
            bundleName: "Video Play",
            amount: 10,
            valid: "1 day",
            validText: "use today only"
          },
          {
            bundleType: "Ticket bundle",
            discount: 45,
            bundleSize: "500MB",
            bundleName: "Social",
            amount: 3,
            valid: "1 day",
            validText: "use today only"
          }
        ],
        voiceBundles: [
          {
            bundleType: "Voice bundle",
            discount: 10,
            bundleSize: "100 minutes",
            amount: 80,
            valid: "7 days",
            validText: "For 7 days"
          },
          {
            bundleType: "Voice bundle",
            discount: 15,
            bundleSize: "400 minutes",
            amount: 405,
            valid: "30 days",
            validText: "For 30 days"
          },
          {
            bundleType: "Voice bundle",
            discount: 10,
            bundleSize: "25 minutes",
            amount: 25,
            valid: "30 days",
            validText: "For 30 days"
          },
          {
            bundleType: "Voice bundle",
            discount: 10,
            bundleSize: "60 minutes",
            amount: 41,
            valid: "2 days",
            validText: "For 2 days"
          },
          {
            bundleType: "Voice bundle",
            discount: 20,
            bundleSize: "60 minutes",
            amount: 20,
            valid: "2 days",
            validText: "For 2 days (Voda to Voda)"
          },
          {
            bundleType: "Voice bundle",
            discount: 10,
            bundleSize: "100 minutes",
            amount: 109,
            valid: "30 days",
            validText: "For 30 days"
          }
        ]
      },
      {
        name: "Mpho",
        number: "0788844021",
        dataBundles: [
          {
            bundleType: "Data bundle",
            discount: 10,
            bundleSize: "10GB",
            amount: 249,
            valid: "7 days",
            validText: "use within 7 days"
          },
          {
            bundleType: "Data bundle",
            discount: 25,
            bundleSize: "1GB",
            amount: 25,
            valid: "1 day",
            validText: "use today only"
          },
          {
            bundleType: "Data bundle",
            discount: 45,
            bundleSize: "2GB",
            amount: 60,
            valid: "7 days",
            validText: "use within 7 days"
          },
          {
            bundleType: "Data bundle",
            discount: 30,
            bundleSize: "5GB",
            amount: 100,
            valid: "7 days",
            validText: "use within 7 days"
          },
          {
            bundleType: "Data bundle",
            discount: 60,
            bundleSize: "500MB",
            amount: 5,
            valid: "1 day",
            validText: "use today only"
          },
          {
            bundleType: "Data bundle",
            discount: 55,
            bundleSize: "750MB",
            amount: 40,
            valid: "7 days",
            validText: "use within 7 days"
          }
        ],
        ticketBundles: [
          {
            bundleType: "Ticket bundle",
            discount: 25,
            bundleSize: "750MB",
            bundleName: "YouTube",
            amount: 35,
            valid: "7 days",
            validText: "use within 7 days"
          },
          {
            bundleType: "Ticket bundle",
            discount: 35,
            bundleSize: "1GB",
            bundleName: "Social",
            amount: 8,
            valid: "1 day",
            validText: "use today only"
          },
          {
            bundleType: "Ticket bundle",
            discount: 20,
            bundleSize: "100MB",
            bundleName: "WhatsApp",
            amount: 6,
            valid: "3 days",
            validText: "use within 3 days"
          },
          {
            bundleType: "Ticket bundle",
            discount: 40,
            bundleSize: "2GB",
            bundleName: "Video Play",
            amount: 10,
            valid: "1 day",
            validText: "use today only"
          },
          {
            bundleType: "Ticket bundle",
            discount: 45,
            bundleSize: "500MB",
            bundleName: "Social",
            amount: 3,
            valid: "1 day",
            validText: "use today only"
          }
        ],
        voiceBundles: [
          {
            bundleType: "Voice bundle",
            discount: 10,
            bundleSize: "60 minutes",
            amount: 41,
            valid: "2 days",
            validText: "For 2 days"
          },
          {
            bundleType: "Voice bundle",
            discount: 15,
            bundleSize: "50 minutes",
            amount: 59,
            valid: "30 days",
            validText: "For 30 days"
          },
          {
            bundleType: "Voice bundle",
            discount: 20,
            bundleSize: "500 minutes",
            amount: 405,
            valid: "30 days",
            validText: "For 30 days"
          },
          {
            bundleType: "Voice bundle",
            discount: 10,
            bundleSize: "100 minutes",
            amount: 109,
            valid: "30 days",
            validText: "For 30 days"
          },
          {
            bundleType: "Voice bundle",
            discount: 5,
            bundleSize: "250 minutes",
            amount: 250,
            valid: "30 days",
            validText: "For 30 days (Voda to Voda)"
          },
          {
            bundleType: "Voice bundle",
            discount: 10,
            bundleSize: "25 minutes",
            amount: 25,
            valid: "2 days",
            validText: "For 2 days (Voda to Voda)"
          }
        ]
      }
    ],
    phones: [
      {
        id: "SamNote20",
        name: "Samsung Galaxy Note 20 5G 256GB",
        url:
          "https://content.vodacom.co.za/content/sales/devices/images/Samsung/Samsung-Galaxy-Note-20-5G-256GB-104050480-main-huge.png",
        price: "from R769 - R2619"
      },
      {
        id: "HuaMatePadT8",
        name: "Huawei MatePad T8",
        url:
          "https://content.vodacom.co.za/content/sales/devices/images/Huawei/HUAWEI-MatePad-T8-108018983-front-large.png",
        price: "from R199 - R1329"
      },
      {
        id: "CatS42",
        name: "CAT S42",
        url:
          "https://content.vodacom.co.za/content/sales/devices/images/Caterpillar/CAT-S42-104049896-front-large.png",
        price: "from R449 - R2119"
      },
      {
        id: "HuaP40Lite",
        name: "Huawei P40 lite 5G",
        url:
          "https://content.vodacom.co.za/content/sales/devices/images/Huawei/HUAWEI-P40-lite-5G-104049827-front-large.png",
        price: "from R349 - R2168"
      },
      {
        id: "iPh11ProM",
        name: "iPhone 11 Pro Max",
        url:
          "https://content.vodacom.co.za/content/sales/devices/images/Apple/iPhone-11-Pro-Max-64GB-104046453-front-large.png",
        price: "from R999 - R3019"
      },
      {
        id: "OneP7TPro",
        name: "OnePlus 7T Pro",
        url:
          "https://content.vodacom.co.za/content/sales/devices/images/OnePlus/OnePlus-7T-Pro-104048587-front-large.png",
        price: "from R749 - R2619"
      }
    ],
    contracts: [
      {
        name: "Smart Data 1GB",
        allocationA: "75 Min",
        allocationB: "1GB",
        details: [
          "25 SMSs",
          "20GB Data once off",
          "Get a free R1000 Woolworths shopping voucher"
        ],
        price: "R769 PM x 36"
      },
      {
        name: "Smart S +",
        allocationA: "200 Min",
        allocationB: "600MB",
        details: [
          "200 SMSs",
          "20GB Data once off",
          "Get a free R1000 Woolworths shopping voucher"
        ],
        price: "R819 PM x 36"
      },
      {
        name: "Smart Data 2GB",
        allocationA: "200 Min",
        allocationB: "600MB",
        details: [
          "200 SMSs",
          "20GB Data once off",
          "Get a free R1000 Woolworths shopping voucher"
        ],
        price: "R819 PM x 36"
      },
      {
        name: "Smart Data 4GB",
        allocationA: "150 Min",
        allocationB: "4GB",
        details: [
          "25 SMSs",
          "20GB Data once off",
          "Get a free R1000 Woolworths shopping voucher"
        ],
        price: "R969 PM x 36"
      },
      {
        name: "Smart M +",
        allocationA: "400 Min",
        allocationB: "900MB",
        details: [
          "400 SMSs",
          "20GB Data once off",
          "Get a free R1000 Woolworths shopping voucher"
        ],
        price: "R969 PM x 36"
      }
    ],
    topUp: [
      {
        name: "Smart Top Up Data 1GB",
        allocationA: "75 Min",
        allocationB: "1GB",
        details: [
          "25 SMSs",
          "20GB Data once off",
          "Get a free R1000 Woolworths shopping voucher"
        ],
        price: "R799 PM x 36"
      },
      {
        name: "Smart Top Up S +",
        allocationA: "200 Min",
        allocationB: "650MB",
        details: [
          "200 SMSs",
          "20GB Data once off",
          "Get a free R1000 Woolworths shopping voucher"
        ],
        price: "R849 PM x 36"
      },
      {
        name: "Smart Top Up Data 2GB",
        allocationA: "150 Min",
        allocationB: "2GB",
        details: [
          "22500 SMSs",
          "20GB Data once off",
          "Get a free R1000 Woolworths shopping voucher"
        ],
        price: "R899 PM x 36"
      },
      {
        name: "Smart Top Up M +",
        allocationA: "400 Min",
        allocationB: "900MB",
        details: [
          "400 SMSs",
          "20GB Data once off",
          "Get a free R1000 Woolworths shopping voucher"
        ],
        price: "R999 PM x 36"
      },
      {
        name: "Smart Top Up Data 4GB",
        allocationA: "150 Min",
        allocationB: "4GB",
        details: [
          "25 SMSs",
          "20GB Data once off",
          "Get a free R1000 Woolworths shopping voucher"
        ],
        price: "R1019 PM x 36"
      }
    ],
    airtime: [
      {
        name: "uChoose Flexi 230",
        allocationA: "R230 airtime",
        details: [
          "20GB Data once off",
          "Get a free R1000 Woolworths shopping voucher"
        ],
        price: "R769 PM x 36"
      },
      {
        name: "uChoose Flexi 390",
        allocationA: "R390 airtime",
        details: [
          "20GB Data once off",
          "Get a free R1000 Woolworths shopping voucher"
        ],
        price: "R869 PM x 36"
      },
      {
        name: "uChoose Flexi 550",
        allocationA: "R550 airtime",
        details: [
          "20GB Data once off",
          "Get a free R1000 Woolworths shopping voucher"
        ],
        price: "R989 PM x 36"
      },
      {
        name: "uChoose Flexi 230",
        allocationA: "R230 airtime",
        details: [
          "20GB Data once off",
          "Get a free R1000 Woolworths shopping voucher"
        ],
        price: "R999 PM x 24"
      },
      {
        name: "uChoose Flexi 550",
        allocationA: "R550 airtime",
        details: [
          "20GB Data once off",
          "Get a free R1000 Woolworths shopping voucher"
        ],
        price: "R1389 PM x 24"
      }
    ],
    faqs: [
      {
        question: "What is Vodacom Just 4 You?",
        answer:
          "Just 4 You provides exclusive offers that are tailor-made to what you love for voice, SMS, data as well as double your data bundles."
      },
      {
        question: "How do I qualify for Just 4 You offers?",
        answer:
          "Just 4 You offers are available to all our individual Vodacom customers. Please note that Enterprise customers and Machine-2-Machine contracts do not qualify for Just 4 You offers."
      },
      {
        question:
          "Will I still be able to view my balances for Just 4 You bundles?",
        answer:
          "Yes, you can view your balances for specific Just 4 You bundles in the ‘Detail Balances’ section of the My Vodacom App."
      },
      {
        question: "Why do my Just 4 You offers differ from time to time?",
        answer:
          "At Vodacom, we understand that your preferences change over time, so we continue to personalise your set of offers to be in line with what you love."
      },
      {
        question: "How long do I need to wait to get my double data bundle?",
        answer:
          "Your additional data bundle should be allocated within 3 minutes of purchase, however, it can take up to 24 hours for the data to be allocated to you."
      },
      {
        question:
          "On my Double Your Data purchase, which data bundle will be used first?",
        answer:
          "Your 30-day personalised Double Your Data bundle will be used first. After the thirty days have passed, standard data rates will apply. Read full Just 4 You Terms and conditions"
      },
      {
        question: "What are Smart Offers?",
        answer:
          "Vodacom’s Smart Offers are personalised offers that are provided to you when you are running out of data. The Smart Offers section of Just 4 You allows you to find these limited time offers even if you missed the SMS, App push or push USSD notification when it was originally sent."
      },
      {
        question: "How long is my double data reward valid for?",
        answer:
          "Your double data reward will be valid for 30 days from the date of allocation. Should you not use your reward within this period, the data will be removed from your balance on the 30th day."
      },
      {
        question: "How many Just 4 You offers can I purchase at a time?",
        answer: "You may purchase as many offers as you like at a time."
      }
    ]
  },
  onLaunch(options) {
    // Page opens for the first time
    console.info("App onLaunch");
  },
  onShow(options) {
    // Reopened by scheme from the background
  }
});
