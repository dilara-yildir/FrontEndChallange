export default function Profile() {
    return (
      <section className="p-8 bg-purple-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-3xl font-bold">Basic Information</h3>
            <ul className="mt-4 space-y-2">
              <li>Doğum Tarihi: 24.03.1996</li>
              <li>İkamet Şehri: Ankara</li>
              <li>Eğitim Durumu: Hacettepe Üniversitesi, Biyoloji Lisans, 2016</li>
              <li>Tercih Ettiği Rol: Frontend, UI</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold">About Me</h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Veniam aut,
              dolit laborum aliquam voluptate nisi mollitia.
            </p>
          </div>
        </div>
      </section>
    );
  }