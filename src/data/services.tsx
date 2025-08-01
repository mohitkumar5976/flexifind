import {
  SparklesIcon,
  WrenchScrewdriverIcon,
  ShoppingBagIcon,
  TruckIcon,
  UserGroupIcon,
  CakeIcon,
  ScissorsIcon,
  BoltIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Cook",
    description: "Hire experienced cooks for delicious home-cooked meals.",
    icon: <CakeIcon className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Cleaner",
    description: "Professional cleaning services for your home and office.",
    icon: <SparklesIcon className="h-8 w-8 text-green-600" />,
  },
  {
    title: "Plumber",
    description: "Skilled plumbers for leak fixes and installations.",
    icon: <WrenchScrewdriverIcon className="h-8 w-8 text-yellow-600" />,
  },
  {
    title: "Delivery Helper",
    description: "Helpers available for local deliveries and loading work.",
    icon: <TruckIcon className="h-8 w-8 text-red-500" />,
  },
  {
    title: "Grocery Shopper",
    description: "Get groceries delivered quickly by trusted helpers.",
    icon: <ShoppingBagIcon className="h-8 w-8 text-purple-600" />,
  },
  {
    title: "Event Helper",
    description: "Hire people to assist in managing and serving at events.",
    icon: <UserGroupIcon className="h-8 w-8 text-pink-600" />,
  },
  {
    title: "Electrician",
    description: "Get licensed electricians for repairs and wiring work.",
    icon: <BoltIcon className="h-8 w-8 text-orange-500" />,
  },
  {
    title: "Beautician",
    description: "At-home salon services by skilled beauticians.",
    icon: <ScissorsIcon className="h-8 w-8 text-rose-500" />,
  },
  {
    title: "Painter",
    description: "Professional painters for homes, offices, and events.",
    icon: <PaintBrushIcon className="h-8 w-8 text-indigo-600" />,
  },
];

export default services;
