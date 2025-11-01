import Image from 'next/image';

export default function Projects() {
	return (
		<section id="projects" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wide font-medium text-zinc-500 dark:text-zinc-300">
				Projects
			</h3>

			{/* Project 1 - MS Glow Store */}
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
				<Image
					alt="MS Glow Store"
					src="/ms glow.jpg"
					className="w-full md:w-80 aspect-video rounded-3xl object-cover"
					width={800}
					height={500}
				/>
				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
						MS Glow Store
					</h4>
					<p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed text-justify">
						Aplikasi <b>MS Glow Store</b> merupakan website e-commerce berbasis PHP dan MySQL 
						yang dirancang untuk mempermudah pelanggan dalam melakukan pembelian produk kecantikan secara online.
						Melalui sistem ini, pengguna dapat melihat katalog produk, menambahkan barang ke keranjang, 
						melakukan pemesanan, hingga melihat riwayat transaksi. Tujuan pembuatan aplikasi ini adalah 
						untuk meningkatkan efisiensi proses penjualan dan memperluas jangkauan pemasaran produk 
						MS Glow secara digital.
					</p>
					<div className="flex items-center gap-x-2.5 mt-2">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							project uas
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							semester 4
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							e-commerce
						</span>
					</div>
				</div>
			</div>

			{/* Project 2 - Toko Elektronik */}
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
				<Image
					alt="Toko Elektronik"
					src="/tokoelektronik.jpg"
					className="w-full md:w-80 aspect-video rounded-3xl object-cover"
					width={800}
					height={500}
				/>
				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
						Toko Elektronik
					</h4>
					<p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed text-justify">
						Website <b>Toko Elektronik</b> ini merupakan e-commerce sederhana yang menampilkan berbagai produk 
						seperti laptop, smartphone, dan aksesoris. Pengguna dapat melihat gambar produk melalui slideshow, 
						melakukan pemesanan, dan mendapatkan struk digital setelah transaksi. 
						Proyek ini dibuat untuk menghadirkan pengalaman belanja online yang modern dengan tampilan 
						interaktif berbasis JavaScript.
					</p>
					<div className="flex items-center gap-x-2.5 mt-2">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							project uts
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							semester 4
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							web app
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
