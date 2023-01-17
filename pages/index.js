import Image from "next/image";
import Layout from "../layout";
import ProcieImage from "../public/image/procie.png";
import RamImage from "../public/image/ram.png";
import LotofRamImage from "../public/image/lot-of-ram.png";
import WhatsappImage from "../public/image/whatsapp.png";
import FlexCableimage from "../public/image/flex-cable.png";
import HoldProcieImage from "../public/image/hold-procie.png";
import TouchpadImage from "../public/image/touchpad.png";
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandWhatsapp,
} from "@tabler/icons";

export default function Home() {
  return (
    <Layout>
      <div>
        <div
          id="top"
          className="relative aspect-[3/4] md:aspect-auto md:h-[432px] bg-fixed bg-center bg-cover bg-no-repeat scroll-mt-[50px]"
          style={{
            backgroundImage: "url(/image/banner.png)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-200 dark:bg-zinc-900 p-3 rounded-xl">
            <div className="bg-fuchsia-400 dark:bg-slate-700 p-4 rounded-t-xl rounded-r-xl mb-3 shadow-lg w-max">
              <h1 className="mb-0">Servis Komputer?</h1>
            </div>
            <div className="flex justify-end">
              <div className="bg-teal-400 dark:bg-stone-700 px-4 py-2 rounded-t-xl rounded-l-xl shadow-lg">
                <h2 className="mb-0">Disini aja!</h2>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-center">
              <a
                href="https://wa.me/6285624200502?text=Halo%2C%20saya%20mau%20servis%20dong"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-3 rounded-lg"
              >
                <Image
                  src={WhatsappImage}
                  alt="Whatsapp Image button"
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          id="whyus"
          className="p-4 md:flex items-center gap-4 max-w-screen-md lg:mx-auto md:bg-zinc-200 md:dark:bg-zinc-900 md:m-4 md:rounded-xl scroll-mt-[50px]"
        >
          <div className="relative aspect-square h-[160px] md:h-[200px] mx-auto md:mx-0 mb-3 md:mb-0">
            <Image
              src={ProcieImage}
              alt="Processor image"
              quality={70}
              fill
              sizes="(min-width: 768px) 200px,
              160px"
              style={{
                objectFit: "cover",
              }}
              className="rounded-lg md:rounded-xl"
            />
          </div>
          <div>
            <h1>Dibuat oleh penggemar</h1>
            <p>
              Kami gemar memperbaiki komputer / laptop kami sendiri, hingga
              banyak yang meminta untuk servis milik mereka.
            </p>
          </div>
        </div>
        <div className="p-4 md:flex items-center gap-4 max-w-screen-md lg:mx-auto md:bg-zinc-200 md:dark:bg-zinc-900 md:m-4 md:rounded-xl">
          <div className="relative aspect-square h-[160px] md:h-[200px] mx-auto md:mx-0 mb-3 md:mb-0">
            <Image
              src={RamImage}
              alt="RAM image"
              fill
              sizes="(min-width: 768px) 200px,
              160px"
              style={{
                objectFit: "cover",
              }}
              className="rounded-lg"
            />
          </div>
          <div>
            <h1>Berani bergaransi</h1>
            <p>
              Kami menjamin garansi 1 bulan untuk semua jasa yang kami berikan.
            </p>
          </div>
        </div>
        <div className="p-4 md:flex items-center gap-4 max-w-screen-md lg:mx-auto md:bg-zinc-200 md:dark:bg-zinc-900 md:m-4 md:rounded-xl">
          <div className="relative aspect-square h-[160px] md:h-[200px] mx-auto md:mx-0 mb-3 md:mb-0">
            <Image
              src={LotofRamImage}
              alt="Lot of RAM image"
              fill
              sizes="(min-width: 768px) 200px,
              160px"
              style={{
                objectFit: "cover",
              }}
              className="rounded-lg"
            />
          </div>
          <div>
            <h1>Flexibel</h1>
            <p>
              Kamu bisa membawa sendiri komponen yang ingin dipasang / dirakit.
            </p>
          </div>
        </div>
        <div className="h-screen flex flex-col justify-center">
          <h1 className="text-center">
            Bebas konsultasi, kontak kami sekarang
          </h1>
          <div className="flex justify-center">
            <a
              href="https://wa.me/6285624200502?text=Halo%2C%20saya%20mau%20servis%20dong"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 p-3 rounded-lg"
            >
              <Image
                src={WhatsappImage}
                alt="Whatsapp Image button"
                height={24}
              />
            </a>
          </div>
        </div>
        <h1 id="products" className="text-center scroll-mt-[50px]">
          Jasa yang kami sediakan
        </h1>
        <div className="md:grid grid-cols-3 max-w-screen-md mx-auto">
          <div className="p-4">
            <div className="relative aspect-square mb-4">
              <Image
                src={FlexCableimage}
                alt="Cable Flexible"
                fill
                sizes="(min-width: 768px) 33vw,
                98vw"
                style={{
                  objectFit: "cover",
                }}
                className="rounded-xl"
              />
            </div>
            <h2 className="mb-0">Servis kerusakan komputer / laptop</h2>
          </div>
          <div className="p-4">
            <div className="relative aspect-square mb-4">
              <Image
                src={HoldProcieImage}
                alt="Holding Processor Image"
                fill
                sizes="(min-width: 768px) 33vw,
                98vw"
                style={{
                  objectFit: "cover",
                }}
                className="rounded-xl"
              />
            </div>
            <h2 className="mb-0">Upgrade part komputer / laptop</h2>
          </div>
          <div className="p-4">
            <div className="relative aspect-square mb-4">
              <Image
                src={TouchpadImage}
                alt="Back of touchpad image"
                fill
                sizes="(min-width: 768px) 33vw,
                98vw"
                style={{
                  objectFit: "cover",
                }}
                className="rounded-xl"
              />
            </div>
            <h2 className="mb-0">Rakit Komputer</h2>
          </div>
          <div className="md:hidden">
            <h3 className="ml-4">Lainnya :</h3>
            <ul>
              <li>Install Windows 10, 11</li>
              <li>Install Linux</li>
              <li>Install aplikasi / game</li>
            </ul>
          </div>
        </div>
        <div
          id="about"
          className="md:h-screen flex flex-col justify-center px-3 my-10 md:my-0 scroll-mt-[50px] max-w-screen-sm mx-auto"
        >
          <h1 className="text-center">Mari servis bersama kami</h1>
          <p>
            Kami berdiri di akhir tahun 2022 lalu, karena banyaknya permintaan,
            kami memutuskan untuk membuat Bushi Computer sebagai toko resmi
            kami. Dibuat agar dapat menjangkau lebih banyak pelanggan.
          </p>
          <p>
            Kami saat ini hanya beroperasi di daerah Bandung, namun tidak
            menutup kemungkinan untuk membuka cabang di kota lain.
          </p>
          <div className="flex justify-center mb-3">
            <a
              href="https://wa.me/6285624200502?text=Halo%2C%20saya%20mau%20servis%20dong"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 p-3 rounded-lg"
            >
              <Image
                src={WhatsappImage}
                alt="Whatsapp Image button"
                height={24}
              />
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/bushi.computer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandInstagram size={32} />
            </a>
            <a
              href="https://www.tiktok.com/@bushi.computer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandTiktok size={32} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
