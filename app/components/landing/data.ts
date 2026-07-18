import {
  CakeSlice,
  Clock3,
  Gift,
  GraduationCap,
  Heart,
  MessageCircle,
  PackageCheck,
  PartyPopper,
  Send,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

export const instagramUrl = "https://www.instagram.com/ansbalon_singaraja/";

const whatsappNumber = "6285645084993";

export function buildWhatsappUrl(message: string) {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = buildWhatsappUrl(
  "Halo ANS Balon Singaraja! Aku mau pesan balon untuk momen spesial 🎈",
);

export const collections = [
  {
    title: "Bucket Balon",
    description: "Rangkaian balon dan bunga yang manis, langsung mencuri perhatian begitu dibuka.",
    label: "Favorit",
    icon: Gift,
    bg: "bg-pink",
    text: "text-white",
    accent: "bg-ink text-lime",
    rotate: "-rotate-3",
    whatsappUrl: buildWhatsappUrl("Halo ANS Balon Singaraja! Aku mau tanya-tanya soal Bucket Balon 🎈"),
  },
  {
    title: "Balon Karakter",
    description: "Karakter lucu untuk kejutan anak, sahabat, atau siapa pun yang perlu ditemani senyum.",
    label: "Playful",
    icon: PartyPopper,
    bg: "bg-lime",
    text: "text-ink",
    accent: "bg-ink text-lime",
    rotate: "rotate-2",
    whatsappUrl: buildWhatsappUrl("Halo ANS Balon Singaraja! Aku mau tanya-tanya soal Balon Karakter 🎈"),
  },
  {
    title: "Custom Surprise",
    description: "Warna dan nuansa disesuaikan dengan momen, penerima, dan pesan yang ingin kamu bawa.",
    label: "Personal",
    icon: Sparkles,
    bg: "bg-violet",
    text: "text-white",
    accent: "bg-sun text-ink",
    rotate: "-rotate-2",
    whatsappUrl: buildWhatsappUrl("Halo ANS Balon Singaraja! Aku mau bikin Custom Surprise balon 🎈"),
  },
];

export const moments = [
  { label: "Ulang Tahun", icon: CakeSlice, color: "bg-pink text-white" },
  { label: "Wisuda", icon: GraduationCap, color: "bg-cobalt text-white" },
  { label: "Anniversary", icon: Heart, color: "bg-sun text-ink" },
];

export const benefits = [
  { title: "Mulai 5K", description: "Pilihan meriah yang tetap ramah di kantong.", icon: Star },
  { title: "Open everyday", description: "Siap bantu rencanakan kejutanmu setiap hari.", icon: Clock3 },
  { title: "Fleksibel diambil", description: "Self pickup, COD, atau delivery via Grab dan Gojek.", icon: Truck },
  { title: "Dibuat untukmu", description: "Pilih nuansa yang paling pas untuk setiap penerima.", icon: Sparkles },
];

export const steps = [
  { number: "01", title: "Ceritakan momennya", description: "Kirim inspirasi, warna favorit, dan tanggal kebutuhan melalui WhatsApp.", icon: MessageCircle },
  { number: "02", title: "Pilih rangkaiannya", description: "Tentukan jenis balon dan detail personal yang paling pas untuk penerima.", icon: PackageCheck },
  { number: "03", title: "Ambil atau kirim", description: "Pesanan siap diambil, COD, atau dikirim lewat Grab/Gojek di area Singaraja.", icon: Send },
];
