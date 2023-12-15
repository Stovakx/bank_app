export const carousalData = [
  {
    id: 1,
    imgUrl: require("../assets/images/visa.png"),
    price: 2345,
    cardType: "VISA",
    cardNumber: "****1234",
    backgroundColor: "#0f60d6",
    textColor: "white",
  },
  {
    id: 2,
    imgUrl: require("../assets/images/mastercard.png"),
    price: 4654,
    cardType: "MasterCard",
    cardNumber: "****5678",
    backgroundColor: "purple",
    textColor: "white",
  },
  {
    id: 3,
    imgUrl: require("../assets/images/stripe.png"),
    price: 3300,
    cardType: "Stripe",
    cardNumber: "****9876",
    backgroundColor: "#55a630",
    textColor: "white",
  },
  {
    id: 4,
    imgUrl: require("../assets/images/discover.png"),
    price: 1700,
    cardType: "Discover",
    cardNumber: "****5432",
    backgroundColor: "gray",
    textColor: "#ea468e",
  },
  {
    id: 5,
    imgUrl: require("../assets/images/paypal.png"),
    price: 2100,
    cardType: "PayPal",
    cardNumber: "****2468",
    backgroundColor: "purple",
    textColor: "white",
  },
  // Add more items as needed
];

export const transactionData = [
  {
    id: 1,
    name: "Paycheck",
    type: "Paycheck",
    amount: "$2000.00",
    date: "2023-12-01",
    time: "09:00",
    imageSource: require("../assets/images/paycheck.png"),
    typeOfTransaction: "income",
  },
  {
    id: 2,
    name: "Freelancing",
    type: "Paycheck",
    amount: "$500.00",
    date: "2023-12-05",
    time: "12:30",
    imageSource: require("../assets/images/contraLogo.jpg"),
    typeOfTransaction: "income",
  },
  {
    id: 3,
    name: "Gift",
    type: "Another income",
    amount: "$50.00",
    date: "2023-12-10",
    time: "15:45",
    imageSource: require("../assets/images/gift.webp"),
    typeOfTransaction: "income",
  },
  {
    id: 4,
    name: "Netflix",
    type: "Subscription",
    amount: "$99.00",
    date: "2023-12-12",
    time: "08:15",
    imageSource: require("../assets/images/netflix.png"),
    typeOfTransaction: "costs",
  },
  {
    id: 5,
    name: "Amazon",
    type: "Subscription",
    amount: "$12.99",
    date: "2023-12-15",
    time: "14:20",
    imageSource: require("../assets/images/amazon.png"),
    typeOfTransaction: "costs",
  },
  {
    id: 6,
    name: "Dividends",
    type: "Shares",
    amount: "$30.00",
    date: "2023-12-15",
    time: "16:30",
    imageSource: require("../assets/images/dividends.jpg"),
    typeOfTransaction: "income",
  },
  {
    id: 7,
    name: "Spotify",
    type: "Subscription",
    amount: "$9.99",
    date: "2023-12-18",
    time: "11:10",
    imageSource: require("../assets/images/spotify.png"),
    typeOfTransaction: "costs",
  },
  {
    id: 8,
    name: "Refund",
    type: "Refund",
    amount: "$25.00",
    date: "2023-12-19",
    time: "09:45",
    imageSource: require("../assets/images/refund.jpg"),
    typeOfTransaction: "income",
  },
  {
    id: 9,
    name: "YouTube",
    type: "Subscription",
    amount: "$11.99",
    date: "2023-12-20",
    time: "17:30",
    imageSource: require("../assets/images/youtube.png"),
    typeOfTransaction: "costs",
  },
  {
    id: 10,
    name: "Apple",
    type: "Subscription",
    amount: "$14.99",
    date: "2023-12-22",
    time: "13:45",
    imageSource: require("../assets/images/apple.png"),
    typeOfTransaction: "costs",
  },
];

export const notificationsData = [
  {
    id: 1,
    name: 'Novinky na účtě',
    description: 'Nová transakce: Připsány úroky na spořicím účtu.',
    date: '2023-12-08',
    time: '09:15',
    type: "Notification"
  },
  {
    id: 2,
    name: 'Novinky na kartě',
    description: 'Platba kartou Visa v obchodě XYZ ve výši 800 Kč.',
    date: '2023-12-08',
    time: '12:30',
    type: "Notification"
  },
  {
    id: 3,
    name: 'Cashback akce',
    description: 'Získali jste 5% cashback z nákupu v supermarketu.',
    date: '2023-12-09',
    time: '15:20',
    type: "Notification"
  },
  {
    id: 4,
    name: 'Převod od přítele',
    description: 'Přijal(a) jste převod od přítele na částku 1500 Kč.',
    date: '2023-12-10',
    time: '10:00',
    type: "Notification"
  },
  {
    id: 5,
    name: 'Upozornění na limit',
    description: 'Blížíte se svému měsíčnímu limitu na platební kartě.',
    date: '2023-12-11',
    time: '18:45',
    type: "Notification"
  },
  {
    id: 6,
    name: 'Výzva k ověření identity',
    description: 'Proveďte ověření identity pro zvýšení bezpečnosti účtu.',
    date: '2023-12-12',
    time: '14:10',
    type: "Notification"
  },
  {
    id: 7,
    name: 'Děkujeme za loajalitu',
    description: 'Děkujeme, že používáte naši peněženku. Máte speciální nabídku na další transakci!',
    date: '2023-12-13',
    time: '11:30',
    type: "Notification"
  },
  {
    id: 8,
    name: 'Upozornění na splatnost',
    description: 'Připomínáme, že máte splatnou fakturu na elektrickou energii.',
    date: '2023-12-14',
    time: '08:00',
    type: "Notification"
  },
  {
    id: 9,
    name: 'Aktualizace mobilní aplikace',
    description: 'Stáhněte si nejnovější verzi naší mobilní aplikace pro lepší zážitek.',
    date: '2023-12-15',
    time: '16:40',
    type: "Notification"
  },
  {
    id: 10,
    name: 'Výzva k hodnocení',
    description: 'Ohodnoťte naši aplikaci a sdílejte svůj názor s námi. Děkujeme!',
    date: '2023-12-16',
    time: '13:15',
    type: "Notification"
  },
];

// Format the price property to be a string with dollar formatting
carousalData.forEach((item) => {
  item.price = item.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
});
