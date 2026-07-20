import type { StaticImageData } from "next/image";

import {
  galleryMetadata,
  previewGalleryIndexes,
} from "./gallery-metadata";

import image01 from "../../assets/Instagram/751219496_1767184107798916_7628573003124682567_n.jpg";
import image02 from "../../assets/Instagram/749285739_1059545187030194_2753713790014202959_n.jpg";
import image03 from "../../assets/Instagram/749250145_1054593040464721_6827398301943232733_n.jpg";
import image04 from "../../assets/Instagram/749213758_2554659998304564_8743053538568866968_n.jpg";
import image05 from "../../assets/Instagram/749132655_27090584617287995_2873819640706119296_n.jpg";
import image06 from "../../assets/Instagram/749132655_1343128510923580_5720577689220616382_n.jpg";
import image07 from "../../assets/Instagram/749066264_2619327215167816_8651730151562532074_n.jpg";
import image08 from "../../assets/Instagram/749066220_1049960307526504_6149981294421032920_n.jpg";
import image09 from "../../assets/Instagram/749041494_1057544770560409_853881942459720279_n.jpg";
import image10 from "../../assets/Instagram/749022579_1602431764932569_3556043378727103181_n.jpg";
import image11 from "../../assets/Instagram/748907619_1716143893030558_4019991182128673225_n.jpg";
import image12 from "../../assets/Instagram/748882954_1044094895028790_1695541662913988708_n.jpg";
import image13 from "../../assets/Instagram/748811209_1318842016657705_1116873374322578681_n.jpg";
import image14 from "../../assets/Instagram/748678219_1334927132142920_888914001598757308_n.jpg";
import image15 from "../../assets/Instagram/748639483_1337799355188046_5050885902320340515_n.jpg";
import image16 from "../../assets/Instagram/748567701_2121678172095473_8685143955861789736_n.jpg";
import image17 from "../../assets/Instagram/748540941_1620066109460703_5543510597532543131_n.jpg";
import image18 from "../../assets/Instagram/748396332_4384437658477659_811371711630040771_n.jpg";
import image19 from "../../assets/Instagram/748330299_1005467032264834_7302855045398092724_n.jpg";
import image20 from "../../assets/Instagram/748286800_1275217864524970_1561891000980805580_n.jpg";
import image21 from "../../assets/Instagram/748264549_1791328848517630_2242477630213329933_n.jpg";
import image22 from "../../assets/Instagram/748231166_37189817893996429_8907795414065007956_n.jpg";
import image23 from "../../assets/Instagram/748070731_2242427316532829_8363263246445582178_n.jpg";
import image24 from "../../assets/Instagram/748043587_1632234274540359_4938691495167945575_n.jpg";
import image25 from "../../assets/Instagram/748043587_1015001778094914_4304945233603779251_n.jpg";
import image26 from "../../assets/Instagram/748004914_1385710150191312_3405035284602564968_n.jpg";
import image27 from "../../assets/Instagram/747998112_4497053690621268_7263957642955576517_n.jpg";
import image28 from "../../assets/Instagram/747988254_1056772413677385_3145213266978418645_n.jpg";
import image29 from "../../assets/Instagram/747948499_1561737265747020_1186489488718864635_n.jpg";
import image30 from "../../assets/Instagram/747923738_1730528301523316_8725511837961541192_n.jpg";
import image31 from "../../assets/Instagram/747888814_1567408775175896_2551826938055473755_n.jpg";
import image32 from "../../assets/Instagram/747752872_3208605722663139_350870921120706673_n.jpg";
import image33 from "../../assets/Instagram/747743413_1548725983376475_4045440092875407125_n.jpg";
import image34 from "../../assets/Instagram/747695179_2820914051625662_6520969866448215101_n.jpg";
import image35 from "../../assets/Instagram/747153566_1033637409245069_6405377789096551661_n.jpg";
import image36 from "../../assets/Instagram/628345034_1582225899595759_2851689367015489786_n.jpg";
import image37 from "../../assets/Instagram/627973351_1395678622571825_8726545952118836432_n.jpg";
import image38 from "../../assets/Instagram/624881391_903494978762767_1205953112528804136_n.jpg";

export type GalleryItem = {
  id: string;
  number: string;
  src: StaticImageData;
  alt: string;
};

const imageSources = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
] as const;

export const galleryItems: readonly GalleryItem[] = imageSources.map(
  (src, index) => ({
    ...galleryMetadata[index],
    src,
  }),
);

export const previewGalleryItems: readonly GalleryItem[] =
  previewGalleryIndexes.map((index) => galleryItems[index]);
