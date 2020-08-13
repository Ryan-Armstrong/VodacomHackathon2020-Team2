App({
  data: {
    selectedUser: {},
    selectedBundle: {},
    selectedExtraBundle: {},
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
          },
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
          },
        ]
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
