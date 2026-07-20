/* ============================================================
   i18n — AZ (source) / EN / TR
   Translations are keyed by the exact Azerbaijani string in the markup,
   so the HTML needs no per-element keys. Proper nouns (people, company
   names, initials) are intentionally absent — they stay as-is.
   ============================================================ */
(function () {
  "use strict";

  var DICT = {
    /* ---------- header / nav ---------- */
    "Foto": { en: "Photo", tr: "Foto" },
    "Video": { en: "Video", tr: "Video" },
    "Beynəlxalq Aqrar Biznes Forumu": { en: "International Agro Business Forum", tr: "Uluslararası Agro İş Forumu" },
    "8–10 Oktyabr 2026": { en: "8–10 October 2026", tr: "8–10 Ekim 2026" },
    "Radisson Hotel · Bakı": { en: "Radisson Hotel · Baku", tr: "Radisson Hotel · Bakü" },
    "Qeydiyyat": { en: "Register", tr: "Kayıt" },
    "Ana səhifə": { en: "Home", tr: "Ana sayfa" },
    "Forum haqqında": { en: "About the forum", tr: "Forum hakkında" },
    "Forumlar": { en: "Editions", tr: "Forumlar" },
    "Tərəfdaşlar": { en: "Partners", tr: "Ortaklar" },
    "Sponsorluq": { en: "Sponsorship", tr: "Sponsorluk" },
    "Qalereya": { en: "Gallery", tr: "Galeri" },
    "Əlaqə": { en: "Contact", tr: "İletişim" },
    "Axtarış": { en: "Search", tr: "Arama" },

    /* ---------- hero ---------- */
    "2026 · Yeni Forum": { en: "2026 · New edition", tr: "2026 · Yeni Forum" },
    "Aqrar sahədə beynəlxalq əməkdaşlığın, innovasiyanın və investisiyanın Bakıda bir araya gəldiyi əsas platforma.":
      { en: "The main platform where international cooperation, innovation and investment in agriculture come together in Baku.",
        tr: "Tarım alanında uluslararası iş birliği, inovasyon ve yatırımın Bakü'de bir araya geldiği ana platform." },
    "Radisson Hotel, Bakı": { en: "Radisson Hotel, Baku", tr: "Radisson Hotel, Bakü" },
    "Ətraflı məlumat": { en: "Learn more", tr: "Detaylı bilgi" },
    "2024 · Retrospektiv": { en: "2024 · Retrospective", tr: "2024 · Retrospektif" },
    "Kənd Təsərrüfatı Nazirliyi və KOBİA tərəfdaşlığı ilə 30-a yaxın şirkət, 3 panel müzakirəsi və qardaş ölkələrdən yüksək səviyyəli iştirak.":
      { en: "In partnership with the Ministry of Agriculture and SMBDA: nearly 30 companies, 3 panel discussions and high-level participation from partner countries.",
        tr: "Tarım Bakanlığı ve KOBİA ortaklığıyla 30'a yakın şirket, 3 panel tartışması ve kardeş ülkelerden üst düzey katılım." },
    "20–21 Fevral 2024": { en: "20–21 February 2024", tr: "20–21 Şubat 2024" },
    "3 panel · 30+ şirkət": { en: "3 panels · 30+ companies", tr: "3 panel · 30+ şirket" },
    "2024-ə bax": { en: "View 2024", tr: "2024'e bak" },
    "2023 · İlk forum": { en: "2023 · First edition", tr: "2023 · İlk forum" },
    "10 ölkə, 55 yerli və xarici şirkət, 900-dən çox peşəkar ziyarətçi — beynəlxalq aqrar əməkdaşlığın təməli qoyuldu.":
      { en: "10 countries, 55 local and international companies, over 900 professional visitors — the foundation of international agricultural cooperation was laid.",
        tr: "10 ülke, 55 yerli ve yabancı şirket, 900'den fazla profesyonel ziyaretçi — uluslararası tarımsal iş birliğinin temeli atıldı." },
    "28 Fevral – 1 Mart 2023": { en: "28 February – 1 March 2023", tr: "28 Şubat – 1 Mart 2023" },
    "2023-ə bax": { en: "View 2023", tr: "2023'e bak" },

    /* ---------- stats ribbon ---------- */
    "Beynəlxalq forum": { en: "International editions", tr: "Uluslararası forum" },
    "İştirakçı ölkə": { en: "Participating countries", tr: "Katılımcı ülke" },
    "Yerli & xarici şirkət": { en: "Local & international companies", tr: "Yerli & yabancı şirket" },
    "Peşəkar ziyarətçi": { en: "Professional visitors", tr: "Profesyonel ziyaretçi" },

    /* ---------- about ---------- */
    "Aqrar biznesin beynəlxalq görüş nöqtəsi": { en: "The international meeting point of agribusiness", tr: "Tarım işletmeciliğinin uluslararası buluşma noktası" },
    "International Agro Business Forum kənd təsərrüfatı sahəsində beynəlxalq əməkdaşlığın gücləndirilməsi, aqrar innovasiyaların transferi və investisiya imkanlarının müzakirəsi üçün Bakıda təşkil olunan forum-sərgidir.":
      { en: "The International Agro Business Forum is a forum and exhibition held in Baku to strengthen international cooperation in agriculture, transfer agricultural innovation and discuss investment opportunities.",
        tr: "International Agro Business Forum, tarım alanında uluslararası iş birliğinin güçlendirilmesi, tarımsal inovasyonun aktarımı ve yatırım fırsatlarının görüşülmesi için Bakü'de düzenlenen bir forum-fuardır." },
    "Forum Azərbaycan Kənd Təsərrüfatı Nazirliyinin, Kiçik və Orta Biznesin İnkişafı Agentliyinin (KOBİA) tərəfdaşlığı, KOB Subyektləri və Klublarının Assosiasiyasının (KOBSKA) və “Agro TV Azərbaycan”ın təşkilatçılığı ilə keçirilir. Tədbir dövlət qurumları, beynəlxalq təşkilatlar, diplomatik korpuslar və aparıcı özəl şirkətləri bir araya gətirir.":
      { en: "The forum is held in partnership with the Ministry of Agriculture of Azerbaijan and the Small and Medium Business Development Agency (SMBDA), organised by the Association of SME Entities and Clubs (ASEC) and “Agro TV Azerbaijan”. It brings together state institutions, international organisations, diplomatic corps and leading private companies.",
        tr: "Forum, Azerbaycan Tarım Bakanlığı ve Küçük ve Orta İşletmelerin Geliştirilmesi Ajansı (KOBİA) ortaklığında, KOBİ Kuruluşları ve Kulüpleri Birliği (KOBSKA) ve “Agro TV Azerbaycan” organizasyonuyla düzenlenmektedir. Etkinlik; devlet kurumlarını, uluslararası kuruluşları, diplomatik misyonları ve önde gelen özel şirketleri bir araya getirir." },
    "Panel müzakirələri və ekspert seminarları": { en: "Panel discussions and expert seminars", tr: "Panel tartışmaları ve uzman seminerleri" },
    "B2B və B2C görüşlər, birbaşa əməkdaşlıq imkanları": { en: "B2B and B2C meetings, direct cooperation opportunities", tr: "B2B ve B2C görüşmeleri, doğrudan iş birliği fırsatları" },
    "Aqrar texnika, dron və suvarma sistemlərinin sərgisi": { en: "Exhibition of agricultural machinery, drones and irrigation systems", tr: "Tarım makineleri, dron ve sulama sistemleri fuarı" },
    "Bakı Forumları": { en: "Baku editions", tr: "Bakü Forumları" },

    /* ---------- editions ---------- */
    "Forumun buraxılışları": { en: "Forum editions", tr: "Forum dönemleri" },
    "2023-cü ildən bu yana forum aqrar sahədə beynəlxalq gündəmi formalaşdırır. Hər buraxılış yeni tərəfdaşlar, yeni texnologiyalar və yeni imkanlar deməkdir.":
      { en: "Since 2023 the forum has been shaping the international agenda in agriculture. Every edition means new partners, new technologies and new opportunities.",
        tr: "2023'ten bu yana forum, tarım alanındaki uluslararası gündemi şekillendiriyor. Her dönem yeni ortaklar, yeni teknolojiler ve yeni fırsatlar demektir." },
    "2026 · Yeni": { en: "2026 · New", tr: "2026 · Yeni" },
    "8–10 Oktyabr 2026 · Radisson Hotel": { en: "8–10 October 2026 · Radisson Hotel", tr: "8–10 Ekim 2026 · Radisson Hotel" },
    "Növbəti Forum": { en: "Next edition", tr: "Sonraki Forum" },
    "Yeni panellər, genişlənmiş sərgi zonası və daha çox beynəlxalq iştirakçı. Ətraflı proqram tezliklə açıqlanacaq.":
      { en: "New panels, an expanded exhibition area and more international participants. The full programme will be announced soon.",
        tr: "Yeni paneller, genişletilmiş fuar alanı ve daha fazla uluslararası katılımcı. Detaylı program yakında açıklanacak." },
    "Ətraflı bax": { en: "View details", tr: "Detaylara bak" },
    "İkinci buraxılış": { en: "Second edition", tr: "İkinci dönem" },
    "Kənd Təsərrüfatı Nazirliyi və KOBİA tərəfdaşlığı ilə 30-a yaxın şirkət, 3 panel müzakirəsi və qardaş ölkələrin yüksək səviyyəli iştirakı.":
      { en: "In partnership with the Ministry of Agriculture and SMBDA: nearly 30 companies, 3 panel discussions and high-level participation from partner countries.",
        tr: "Tarım Bakanlığı ve KOBİA ortaklığıyla 30'a yakın şirket, 3 panel tartışması ve kardeş ülkelerin üst düzey katılımı." },
    "İlk beynəlxalq forum": { en: "First international edition", tr: "İlk uluslararası forum" },
    "10 ölkə, 55 şirkət və 900-dən çox ziyarətçi ilə aqrar əməkdaşlığın təməli qoyuldu. 6 seminar və panel, intensiv B2B görüşlər.":
      { en: "With 10 countries, 55 companies and over 900 visitors, the foundation of agricultural cooperation was laid. 6 seminars and panels, intensive B2B meetings.",
        tr: "10 ülke, 55 şirket ve 900'den fazla ziyaretçi ile tarımsal iş birliğinin temeli atıldı. 6 seminer ve panel, yoğun B2B görüşmeleri." },

    /* ---------- year 2026 ---------- */
    "Növbəti forum": { en: "Next edition", tr: "Sonraki forum" },
    "8–10 Oktyabr 2026 · Radisson Hotel, Bakı": { en: "8–10 October 2026 · Radisson Hotel, Baku", tr: "8–10 Ekim 2026 · Radisson Hotel, Bakü" },
    "Buraxılış · 2026": { en: "Edition · 2026", tr: "Dönem · 2026" },
    "Növbəti Forum 8–10 oktyabr 2026 tarixlərində Bakıda, Radisson Hotel-də keçiriləcək. 3-cü Beynəlxalq Aqro Biznes Forum aqrar sahədə beynəlxalq əməkdaşlıq, innovasiya və investisiya imkanlarını bir araya gətirəcək. Rəsmi proqram, spikerlər və iştirakçı şirkətlərin siyahısı tezliklə açıqlanacaq.":
      { en: "The next edition will be held on 8–10 October 2026 in Baku, at the Radisson Hotel. The 3rd International Agro Business Forum will bring together international cooperation, innovation and investment opportunities in agriculture. The official programme, speakers and list of participating companies will be announced soon.",
        tr: "Sonraki Forum 8–10 Ekim 2026 tarihlerinde Bakü'de, Radisson Hotel'de düzenlenecek. 3. Uluslararası Agro İş Forumu, tarım alanında uluslararası iş birliği, inovasyon ve yatırım fırsatlarını bir araya getirecek. Resmi program, konuşmacılar ve katılımcı şirketlerin listesi yakında açıklanacak." },
    "Qeydiyyat açıqdır": { en: "Registration is open", tr: "Kayıtlar açık" },
    "Forumda iştirak edin": { en: "Take part in the forum", tr: "Foruma katılın" },
    "2026 forumunun biletləri rəsmi bilet tərəfdaşı": { en: "Tickets for the 2026 forum are sold by our official ticketing partner", tr: "2026 forumunun biletleri resmi bilet ortağı" },
    "üzərindən satılır.": { en: ".", tr: "üzerinden satılmaktadır." },
    "Rəsmi bilet tərəfdaşı": { en: "Official ticketing partner", tr: "Resmi bilet ortağı" },
    "2026 · Tarix": { en: "2026 · Date", tr: "2026 · Tarih" },
    "8–10 Okt": { en: "8–10 Oct", tr: "8–10 Eki" },
    "Bakı · Məkan": { en: "Baku · Venue", tr: "Bakü · Mekân" },
    "Tezliklə": { en: "Coming soon", tr: "Yakında" },
    "Proqram & spikerlər": { en: "Programme & speakers", tr: "Program & konuşmacılar" },
    "Açıqdır": { en: "Open", tr: "Açık" },
    "Çox yaxında": { en: "Coming soon", tr: "Çok yakında" },
    "2026-cı il forumunun rəsmi proqramı, spikerləri və materialları tezliklə açıqlanacaq.":
      { en: "The official programme, speakers and materials of the 2026 forum will be announced soon.",
        tr: "2026 forumunun resmi programı, konuşmacıları ve materyalleri yakında açıklanacak." },
    "Proqram": { en: "Programme", tr: "Program" },
    "Rəsmi proqram və spikerlər tezliklə": { en: "Official programme and speakers coming soon", tr: "Resmi program ve konuşmacılar yakında" },
    "Forumun tam proqramı, panel mövzuları və spiker siyahısı hazırlanır — tezliklə bu bölmədə açıqlanacaq.":
      { en: "The full programme, panel topics and speaker list are being prepared — they will be published in this section soon.",
        tr: "Forumun tam programı, panel konuları ve konuşmacı listesi hazırlanıyor — yakında bu bölümde açıklanacak." },
    "Sərgi": { en: "Exhibition", tr: "Fuar" },
    "Genişlənmiş sərgi zonası və B2B görüşlər": { en: "Expanded exhibition area and B2B meetings", tr: "Genişletilmiş fuar alanı ve B2B görüşmeleri" },
    "2026 buraxılışında sərgi zonası genişlənir; yerli və beynəlxalq şirkətlərlə birbaşa B2B görüşlər üçün qeydiyyat tezliklə açılacaq.":
      { en: "The exhibition area is expanding for the 2026 edition; registration for direct B2B meetings with local and international companies will open soon.",
        tr: "2026 döneminde fuar alanı genişliyor; yerli ve uluslararası şirketlerle doğrudan B2B görüşmeleri için kayıtlar yakında açılacak." },

    /* ---------- partners ---------- */
    "Tərəfdaşlar · 2026": { en: "Partners · 2026", tr: "Ortaklar · 2026" },
    "Təşkilatçılar və tərəfdaşlar": { en: "Organisers and partners", tr: "Organizatörler ve ortaklar" },
    "Forum dövlət qurumları, beynəlxalq təşkilatlar və sahə assosiasiyalarının birgə dəstəyi ilə keçirilir.":
      { en: "The forum is held with the joint support of state institutions, international organisations and industry associations.",
        tr: "Forum; devlet kurumları, uluslararası kuruluşlar ve sektör birliklerinin ortak desteğiyle düzenlenmektedir." },
    "Təşkilatçı": { en: "Organiser", tr: "Organizatör" },
    "Azərbaycan Türkiyə İş Adamları Birliyi": { en: "Azerbaijan Turkey Business Association", tr: "Azerbaycan Türkiye İş Adamları Birliği" },
    "Aqrobiznes platforması": { en: "Agribusiness platform", tr: "Tarım işletmeciliği platformu" },
    "Rəsmi tərəfdaş": { en: "Official partner", tr: "Resmi ortak" },
    "Kənd Təsərrüfatı Nazirliyi": { en: "Ministry of Agriculture", tr: "Tarım Bakanlığı" },
    "Azərbaycan Respublikası": { en: "Republic of Azerbaijan", tr: "Azerbaycan Cumhuriyeti" },
    "Aqrar İnnovasiya Mərkəzi": { en: "Agrarian Innovation Centre", tr: "Tarımsal İnovasyon Merkezi" },
    "Tərəfdaş": { en: "Partner", tr: "Ortak" },
    "Media tərəfdaş": { en: "Media partner", tr: "Medya ortağı" },
    "Bilet satışı": { en: "Ticket sales", tr: "Bilet satışı" },

    /* ---------- sponsorship ---------- */
    "Foruma sponsor olun": { en: "Become a forum sponsor", tr: "Foruma sponsor olun" },
    "International Agro Business Forum aqrar sahədə qərar verən tərəfləri — dövlət qurumlarını, investorları, istehsalçıları və beynəlxalq şirkətləri bir araya gətirir. Sponsorluq brendinizi məhz bu auditoriyaya birbaşa təqdim etmək imkanıdır.":
      { en: "The International Agro Business Forum brings together the decision-makers of the agricultural sector — state institutions, investors, producers and international companies. Sponsorship is your chance to present your brand directly to exactly this audience.",
        tr: "International Agro Business Forum, tarım sektöründe karar veren tarafları — devlet kurumlarını, yatırımcıları, üreticileri ve uluslararası şirketleri bir araya getirir. Sponsorluk, markanızı tam da bu kitleye doğrudan sunma fırsatıdır." },
    "peşəkar ziyarətçi": { en: "professional visitors", tr: "profesyonel ziyaretçi" },
    "yerli & xarici şirkət": { en: "local & international companies", tr: "yerli & yabancı şirket" },
    "iştirakçı ölkə": { en: "participating countries", tr: "katılımcı ülke" },
    "Loqonuz forumun rəsmi materiallarında, saytda və səhnə fonunda": { en: "Your logo on the forum's official materials, website and stage backdrop", tr: "Logonuz forumun resmi materyallerinde, web sitesinde ve sahne arka fonunda" },
    "Sərgi zonasında stend və məhsul təqdimatı": { en: "A stand and product presentation in the exhibition area", tr: "Fuar alanında stant ve ürün sunumu" },
    "Panel müzakirələrində çıxış imkanı": { en: "The opportunity to speak in panel discussions", tr: "Panel tartışmalarında konuşma imkânı" },
    "İştirakçılarla birbaşa B2B görüşlər": { en: "Direct B2B meetings with participants", tr: "Katılımcılarla doğrudan B2B görüşmeleri" },
    "Media tərəfdaşlarımızda əhatə": { en: "Coverage by our media partners", tr: "Medya ortaklarımızda yer alma" },
    "Sponsorluq paketi": { en: "Sponsorship package", tr: "Sponsorluk paketi" },
    "Şərtləri öyrənin": { en: "Ask for the terms", tr: "Koşulları öğrenin" },
    "Sponsorluq paketləri və imkanlar barədə ətraflı məlumat üçün bizimlə əlaqə saxlayın — şirkətinizə uyğun formatı birlikdə seçək.":
      { en: "Contact us for details on sponsorship packages and opportunities — let's choose the format that suits your company together.",
        tr: "Sponsorluk paketleri ve imkânlar hakkında detaylı bilgi için bizimle iletişime geçin — şirketinize uygun formatı birlikte seçelim." },
    "Sponsorluq üçün müraciət": { en: "Apply for sponsorship", tr: "Sponsorluk için başvuru" },

    /* ---------- year 2024 ---------- */
    "Buraxılış": { en: "Edition", tr: "Dönem" },
    "20–21 Fevral 2024 · Baku Marriott Boulevard": { en: "20–21 February 2024 · Baku Marriott Boulevard", tr: "20–21 Şubat 2024 · Baku Marriott Boulevard" },
    "Buraxılış · 2024": { en: "Edition · 2024", tr: "Dönem · 2024" },
    "20–21 fevral tarixlərində Kənd Təsərrüfatı Nazirliyinin, KOBİA-nın tərəfdaşlığı, KOBSKA və “Agro TV Azərbaycan”ın birgə təşkilatçılığı ilə keçirildi. Hər iki ölkənin rəsmi nümayəndələri, sahə iştirakçıları və media qurumları iştirak etdi; 30-a yaxın şirkətin məhsullarından ibarət sərgi və 3 panel müzakirəsi təşkil olundu.":
      { en: "Held on 20–21 February in partnership with the Ministry of Agriculture and SMBDA, jointly organised by ASEC and “Agro TV Azerbaijan”. Official representatives of both countries, industry participants and media outlets took part; an exhibition of products from nearly 30 companies and 3 panel discussions were organised.",
        tr: "20–21 Şubat tarihlerinde Tarım Bakanlığı ve KOBİA ortaklığında, KOBSKA ve “Agro TV Azerbaycan” ortak organizasyonuyla düzenlendi. Her iki ülkenin resmi temsilcileri, sektör katılımcıları ve medya kuruluşları yer aldı; 30'a yakın şirketin ürünlerinden oluşan bir fuar ve 3 panel tartışması düzenlendi." },
    "Forum günü": { en: "Forum days", tr: "Forum günü" },
    "Sərgi iştirakçısı": { en: "Exhibitors", tr: "Fuar katılımcısı" },
    "Ziyarətçi": { en: "Visitors", tr: "Ziyaretçi" },
    "Fəxri açılış spikeri": { en: "Honorary opening speakers", tr: "Onur konuğu açılış konuşmacısı" },
    "Xəbər": { en: "News", tr: "Haber" },
    "Açılış": { en: "Opening", tr: "Açılış" },
    "Açılış nitqi spikerləri və fəxri qonaqlar": { en: "Opening speech speakers and honorary guests", tr: "Açılış konuşması konuşmacıları ve onur konukları" },
    "Elçin Zeynalov (Kənd Təsərrüfatı Nazirinin müavini), Hikmət Məmmədov (KOBİA), Ömər Kocaman (TDT Baş katibin müavini), Bəhrom Əşrəfxanov (Özbəkistanın səfiri), Tahir Rzayev (Aqrar Siyasət Komitəsi), Nasar Hayat (FAO), İlkay Ünal (İGSAŞ), Yıldıray Gençer (ECOSA & TSÜAB), Nigar Ələsgərova (KOBSKA) və Doğan Başaran (Agro TV).":
      { en: "Elçin Zeynalov (Deputy Minister of Agriculture), Hikmət Məmmədov (SMBDA), Ömər Kocaman (Deputy Secretary General of the OTS), Bəhrom Əşrəfxanov (Ambassador of Uzbekistan), Tahir Rzayev (Agrarian Policy Committee), Nasar Hayat (FAO), İlkay Ünal (İGSAŞ), Yıldıray Gençer (ECOSA & TSÜAB), Nigar Ələsgərova (ASEC) and Doğan Başaran (Agro TV).",
        tr: "Elçin Zeynalov (Tarım Bakan Yardımcısı), Hikmət Məmmədov (KOBİA), Ömər Kocaman (TDT Genel Sekreter Yardımcısı), Bəhrom Əşrəfxanov (Özbekistan Büyükelçisi), Tahir Rzayev (Tarım Politikası Komitesi), Nasar Hayat (FAO), İlkay Ünal (İGSAŞ), Yıldıray Gençer (ECOSA & TSÜAB), Nigar Ələsgərova (KOBSKA) ve Doğan Başaran (Agro TV)." },
    "Panel": { en: "Panel", tr: "Panel" },
    "3 sessiya": { en: "3 sessions", tr: "3 oturum" },
    "Üç istiqamətdə panel müzakirələri": { en: "Panel discussions in three directions", tr: "Üç yönde panel tartışmaları" },
    "Özəl və dövlət sektorunun fəaliyyəti; kənd təsərrüfatında innovativ təcrübələr və davamlılıq; Azərbaycanda kənd təsərrüfatına dəyər qatacaq layihələr. Panellərin tam tərkibi aşağıda “Panellər” bölməsində.":
      { en: "Activity of the private and public sector; innovative practices and sustainability in agriculture; projects that will add value to agriculture in Azerbaijan. The full line-up is in the “Panels” section below.",
        tr: "Özel ve kamu sektörünün faaliyeti; tarımda yenilikçi uygulamalar ve sürdürülebilirlik; Azerbaycan'da tarıma değer katacak projeler. Panellerin tam kadrosu aşağıdaki “Paneller” bölümünde." },
    "Təqdimat": { en: "Presentation", tr: "Sunum" },
    "Beynəlxalq şirkət təqdimatları": { en: "International company presentations", tr: "Uluslararası şirket sunumları" },
    "Türkiyədən və digər ölkələrdən iştirak edən şirkətlərin təqdimatları keçirildi; aqrar texnologiya və xidmətlərdən ibarət sərgi iştirakçılar üçün yeni əməkdaşlıq imkanları yaratdı.":
      { en: "Presentations were held by companies from Türkiye and other countries; the exhibition of agricultural technology and services created new cooperation opportunities for participants.",
        tr: "Türkiye'den ve diğer ülkelerden katılan şirketlerin sunumları gerçekleştirildi; tarım teknolojisi ve hizmetlerinden oluşan fuar, katılımcılar için yeni iş birliği fırsatları yarattı." },
    "Panellər · 2024": { en: "Panels · 2024", tr: "Paneller · 2024" },
    "Panel müzakirələri": { en: "Panel discussions", tr: "Panel tartışmaları" },
    "3 panel — hər birinin posteri və spikerləri. Sürüşdürün və ya postere toxunaraq tam ölçüdə baxın.":
      { en: "3 panels — each with its poster and speakers. Swipe, or tap a poster to view it full size.",
        tr: "3 panel — her birinin afişi ve konuşmacıları. Kaydırın veya afişe dokunarak tam boyutta görüntüleyin." },
    "Moderator:": { en: "Moderator:", tr: "Moderatör:" },
    "Kənd təsərrüfatında özəl və dövlət sektorunun fəaliyyəti": { en: "Activity of the private and public sector in agriculture", tr: "Tarımda özel ve kamu sektörünün faaliyeti" },
    "Kənd təsərrüfatında innovativ təcrübələr və davamlılıq": { en: "Innovative practices and sustainability in agriculture", tr: "Tarımda yenilikçi uygulamalar ve sürdürülebilirlik" },
    "Azərbaycanda kənd təsərrüfatına dəyər qatacaq layihələr": { en: "Projects that will add value to agriculture in Azerbaijan", tr: "Azerbaycan'da tarıma değer katacak projeler" },

    /* ---------- roles (leading em dash kept) ---------- */
    "— KOBSKA sədri": { en: "— Chair of ASEC", tr: "— KOBSKA başkanı" },
    "— Aqrar İnnovasiya Mərkəzinin direktoru": { en: "— Director of the Agrarian Innovation Centre", tr: "— Tarımsal İnovasyon Merkezi direktörü" },
    "— Ziraat Bank Azərbaycan İdarə Heyətinin sədri": { en: "— Chairman of the Board of Ziraat Bank Azerbaijan", tr: "— Ziraat Bank Azerbaycan Yönetim Kurulu başkanı" },
    "— AKİA sədr müavini": { en: "— Deputy Chair of ACDA", tr: "— AKİA başkan yardımcısı" },
    "— İGSAŞ satış və marketinq direktoru": { en: "— Sales and marketing director of İGSAŞ", tr: "— İGSAŞ satış ve pazarlama direktörü" },
    "— “Hasvet” A.Ş. sədri": { en: "— Chairman of “Hasvet” A.Ş.", tr: "— “Hasvet” A.Ş. başkanı" },
    "— Aqrar İnnovasiya Mərkəzi şöbə müdiri": { en: "— Department head at the Agrarian Innovation Centre", tr: "— Tarımsal İnovasyon Merkezi şube müdürü" },
    "— Ernak Makina rəhbəri": { en: "— Head of Ernak Makina", tr: "— Ernak Makina yöneticisi" },
    "— Kürdəmir Süd Emalı Zavodu direktoru": { en: "— Director of the Kürdəmir Dairy Plant", tr: "— Kürdemir Süt İşleme Fabrikası direktörü" },
    "— “Ünlü Ziraat Aletleri” İdarə Heyətinin sədri": { en: "— Chairman of the Board of “Ünlü Ziraat Aletleri”", tr: "— “Ünlü Ziraat Aletleri” Yönetim Kurulu başkanı" },
    "— “Daze Tarım” baş direktoru": { en: "— General director of “Daze Tarım”", tr: "— “Daze Tarım” genel müdürü" },
    "— “AGV TECHNIC” baş direktoru": { en: "— General director of “AGV TECHNIC”", tr: "— “AGV TECHNIC” genel müdürü" },
    "— “Prior Leasing” PR meneceri": { en: "— PR manager of “Prior Leasing”", tr: "— “Prior Leasing” PR müdürü" },
    "— “Mars Agro Plant” rəhbəri": { en: "— Head of “Mars Agro Plant”", tr: "— “Mars Agro Plant” yöneticisi" },
    "— “United Farms” rəhbəri": { en: "— Head of “United Farms”", tr: "— “United Farms” yöneticisi" },
    "— Kənd Təsərrüfatı Nazirliyi, Meyvəçilik və Tərəvəzçilik şöbəsinin müdiri": { en: "— Head of the Fruit and Vegetable Department, Ministry of Agriculture", tr: "— Tarım Bakanlığı, Meyvecilik ve Sebzecilik şubesi müdürü" },
    "— “Aqronil” İdarə Heyətinin sədri": { en: "— Chairman of the Board of “Aqronil”", tr: "— “Aqronil” Yönetim Kurulu başkanı" },
    "— “Topraq Tarım Teknolojileri” satış direktoru": { en: "— Sales director of “Topraq Tarım Teknolojileri”", tr: "— “Topraq Tarım Teknolojileri” satış direktörü" },
    "— Türkiyənin Azərbaycandakı Kənd Təsərrüfatı Məsləhətçisi": { en: "— Agriculture Counsellor of Türkiye in Azerbaijan", tr: "— Türkiye'nin Azerbaycan Tarım Müşaviri" },
    "— Aqrar Tədqiqatlar Mərkəzinin direktoru": { en: "— Director of the Agrarian Research Centre", tr: "— Tarımsal Araştırmalar Merkezi direktörü" },
    "— AKİA-nın sədr müavini": { en: "— Deputy Chair of ACDA", tr: "— AKİA başkan yardımcısı" },
    "— İqtisadi Zonaların İnkişafı Agentliyi": { en: "— Economic Zones Development Agency", tr: "— Ekonomik Bölgelerin Geliştirilmesi Ajansı" },
    "— Boğaziçi Universiteti": { en: "— Boğaziçi University", tr: "— Boğaziçi Üniversitesi" },
    "— “Ernak” şirkətinin sədri": { en: "— Chairman of “Ernak”", tr: "— “Ernak” şirketinin başkanı" },
    "— “Agro Dairy” layihə rəhbəri": { en: "— Project lead at “Agro Dairy”", tr: "— “Agro Dairy” proje yöneticisi" },
    "— AXA-nın sədr müavini": { en: "— Deputy Chair of AXA", tr: "— AXA başkan yardımcısı" },
    "— “Rostselmash” beynəlxalq satış direktoru": { en: "— International sales director of “Rostselmash”", tr: "— “Rostselmash” uluslararası satış direktörü" },
    "— Agro TV Azerbaijan yayım direktoru": { en: "— Broadcast director of Agro TV Azerbaijan", tr: "— Agro TV Azerbaycan yayın direktörü" },
    "— “Mars Agro” şirkətinin rəhbəri": { en: "— Head of “Mars Agro”", tr: "— “Mars Agro” şirketinin yöneticisi" },
    "— “Agro Food Investments” sədri": { en: "— Chairman of “Agro Food Investments”", tr: "— “Agro Food Investments” başkanı" },
    "— “Veysəloğlu” icraçı direktoru": { en: "— Executive director of “Veysəloğlu”", tr: "— “Veysəloğlu” icra direktörü" },
    "— “Stoller Türkiye” marketinq direktoru": { en: "— Marketing director of “Stoller Türkiye”", tr: "— “Stoller Türkiye” pazarlama direktörü" },
    "— “AgroMix” şirkətinin direktoru": { en: "— Director of “AgroMix”", tr: "— “AgroMix” şirketinin direktörü" },
    "— “Aqualink” MMC CEO-su": { en: "— CEO of “Aqualink” LLC", tr: "— “Aqualink” LLC CEO'su" },
    "— Azərbaycan Qida və İçki Sənayeçiləri Assosiasiyası": { en: "— Azerbaijan Food and Beverage Industrialists Association", tr: "— Azerbaycan Gıda ve İçecek Sanayicileri Derneği" },
    "— “Kuzey Tohumculuk” ortağı, Agro TV sədri": { en: "— Partner at “Kuzey Tohumculuk”, chairman of Agro TV", tr: "— “Kuzey Tohumculuk” ortağı, Agro TV başkanı" },
    "— “Azərbaycan Meliorasiya və Su Təsərrüfatı” ASC": { en: "— “Azerbaijan Melioration and Water Management” OJSC", tr: "— “Azerbaycan Meliorasyon ve Su İşletmesi” AŞ" },
    "— “Topraq Tarım Teknolojileri” qurucu ortaq və CEO": { en: "— Founding partner and CEO of “Topraq Tarım Teknolojileri”", tr: "— “Topraq Tarım Teknolojileri” kurucu ortağı ve CEO" },
    "— “Traktormetre” aparıcısı": { en: "— Presenter of “Traktormetre”", tr: "— “Traktormetre” sunucusu" },
    "— “AGV Technic” icraçı direktoru": { en: "— Executive director of “AGV Technic”", tr: "— “AGV Technic” icra direktörü" },
    "— “Genç Güçsan” İdarə Heyətinin sədri": { en: "— Chairman of the Board of “Genç Güçsan”", tr: "— “Genç Güçsan” Yönetim Kurulu başkanı" },
    "— “Daze Tarım Teknolojileri” icraçı direktoru": { en: "— Executive director of “Daze Tarım Teknolojileri”", tr: "— “Daze Tarım Teknolojileri” icra direktörü" },

    /* ---------- speakers ---------- */
    "Fəxri qonaqlar · 2024": { en: "Honorary guests · 2024", tr: "Onur konukları · 2024" },
    "Açılış mərasimi spikerləri": { en: "Opening ceremony speakers", tr: "Açılış töreni konuşmacıları" },
    "Forumun rəsmi açılış mərasimində dövlət qurumlarının, beynəlxalq təşkilatların və diplomatik korpusların yüksək rütbəli nümayəndələri çıxış etmişlər.":
      { en: "High-ranking representatives of state institutions, international organisations and diplomatic corps spoke at the forum's official opening ceremony.",
        tr: "Forumun resmi açılış töreninde devlet kurumlarının, uluslararası kuruluşların ve diplomatik misyonların üst düzey temsilcileri konuşma yaptı." },
    "Kənd Təsərrüfatı Nazirinin müavini": { en: "Deputy Minister of Agriculture", tr: "Tarım Bakan Yardımcısı" },
    "KOBİA İdarə Heyəti sədr müavini": { en: "Deputy Chairman of the SMBDA Board", tr: "KOBİA Yönetim Kurulu başkan yardımcısı" },
    "TDT Baş katibin müavini": { en: "Deputy Secretary General of the OTS", tr: "TDT Genel Sekreter Yardımcısı" },
    "Özbəkistanın Azərbaycandakı səfiri": { en: "Ambassador of Uzbekistan to Azerbaijan", tr: "Özbekistan'ın Azerbaycan Büyükelçisi" },
    "Aqrar Siyasət Komitəsinin sədri": { en: "Chairman of the Agrarian Policy Committee", tr: "Tarım Politikası Komitesi başkanı" },
    "FAO Tərəfdaşlıq və Əlaqələndirmə Ofisinin rəhbəri": { en: "Head of the FAO Partnership and Liaison Office", tr: "FAO Ortaklık ve Koordinasyon Ofisi başkanı" },
    "İGSAŞ baş direktoru": { en: "General director of İGSAŞ", tr: "İGSAŞ genel müdürü" },
    "ECOSA və TSÜAB rəhbəri": { en: "Head of ECOSA and TSÜAB", tr: "ECOSA ve TSÜAB başkanı" },
    "KOBSKA sədri": { en: "Chair of ASEC", tr: "KOBSKA başkanı" },
    "Agro TV Turkey & Azerbaijan rəhbəri": { en: "Head of Agro TV Turkey & Azerbaijan", tr: "Agro TV Turkey & Azerbaijan yöneticisi" },

    /* ---------- year 2023 ---------- */
    "İlk forum": { en: "First edition", tr: "İlk forum" },
    "28 Fevral – 1 Mart 2023 · Baku Marriott Boulevard": { en: "28 February – 1 March 2023 · Baku Marriott Boulevard", tr: "28 Şubat – 1 Mart 2023 · Baku Marriott Boulevard" },
    "Buraxılış · 2023": { en: "Edition · 2023", tr: "Dönem · 2023" },
    "28 fevral – 1 mart 2023-cü il tarixlərində Türkiyə Cümhuriyyəti Tarım və Orman Bakanlığının tərəfdaşlığı, AGRO TV Azərbaycan və KOBSKA-nın təşkilatçılığı ilə Baku Marriott Boulevard Hotel-də keçirildi. İlk forum kənd təsərrüfatının rəqəmsallaşdırılması və investisiya imkanlarını diqqət mərkəzinə gətirdi.":
      { en: "Held on 28 February – 1 March 2023 at the Baku Marriott Boulevard Hotel, in partnership with the Ministry of Agriculture and Forestry of the Republic of Türkiye and organised by AGRO TV Azerbaijan and ASEC. The first edition put the digitalisation of agriculture and investment opportunities at the centre of attention.",
        tr: "28 Şubat – 1 Mart 2023 tarihlerinde Türkiye Cumhuriyeti Tarım ve Orman Bakanlığı ortaklığında, AGRO TV Azerbaycan ve KOBSKA organizasyonuyla Baku Marriott Boulevard Hotel'de düzenlendi. İlk forum, tarımın dijitalleşmesini ve yatırım fırsatlarını odak noktasına taşıdı." },
    "Seminar & panel": { en: "Seminars & panels", tr: "Seminer & panel" },
    "Rəsmi açılış mərasimi və fəxri qonaqlar": { en: "Official opening ceremony and honorary guests", tr: "Resmi açılış töreni ve onur konukları" },
    "Forumun Bakıdakı açılışında dövlət qurumlarının, beynəlxalq təşkilatların və diplomatik korpusların yüksək rütbəli nümayəndələri çıxış etdilər: Elçin Zeynalov (Kənd Təsərrüfatı Nazirinin müavini), Emin Hacıyev (Milli Məclis), Orxan Məmmədov (KOBİA), Cahit Bağçı (Türkiyənin Azərbaycandakı səfiri), Bariz Mehdiyev (FAO), Doğan Başaran (Agro TV) və Nigar Ələsgərova (KOBSKA).":
      { en: "At the forum's opening in Baku, high-ranking representatives of state institutions, international organisations and diplomatic corps spoke: Elçin Zeynalov (Deputy Minister of Agriculture), Emin Hacıyev (National Assembly), Orxan Məmmədov (SMBDA), Cahit Bağçı (Ambassador of Türkiye to Azerbaijan), Bariz Mehdiyev (FAO), Doğan Başaran (Agro TV) and Nigar Ələsgərova (ASEC).",
        tr: "Forumun Bakü'deki açılışında devlet kurumlarının, uluslararası kuruluşların ve diplomatik misyonların üst düzey temsilcileri konuşma yaptı: Elçin Zeynalov (Tarım Bakan Yardımcısı), Emin Hacıyev (Milli Meclis), Orxan Məmmədov (KOBİA), Cahit Bağçı (Türkiye'nin Azerbaycan Büyükelçisi), Bariz Mehdiyev (FAO), Doğan Başaran (Agro TV) ve Nigar Ələsgərova (KOBSKA)." },
    "Strateji": { en: "Strategic", tr: "Stratejik" },
    "Türkiyə və Azərbaycanın aqrar baxışı və müştərək hədəflər": { en: "The agricultural vision of Türkiye and Azerbaijan and shared goals", tr: "Türkiye ve Azerbaycan'ın tarım vizyonu ve ortak hedefler" },
    "İki qardaş ölkə arasında strateji tərəfdaşlıq, aqrar innovasiyaların transferi və ortaq hədəflər müzakirə edildi. Məruzəçilər: Hakan Kalender, Anar Cəfərov, Firdovsi Fikrətzadə, Mehman İsmayılov.":
      { en: "Strategic partnership between the two brotherly countries, the transfer of agricultural innovation and shared goals were discussed. Speakers: Hakan Kalender, Anar Cəfərov, Firdovsi Fikrətzadə, Mehman İsmayılov.",
        tr: "İki kardeş ülke arasında stratejik ortaklık, tarımsal inovasyonun aktarımı ve ortak hedefler görüşüldü. Konuşmacılar: Hakan Kalender, Anar Cəfərov, Firdovsi Fikrətzadə, Mehman İsmayılov." },
    "Şəbəkələşmə və sərgi imkanları": { en: "Networking and exhibition opportunities", tr: "Ağ kurma ve fuar imkânları" },
    "Sərgi zonasında Hekaro, Stoller, Hi-tech Water Systems, Rostselmash və digər şirkətlərin ən son aqrar dronları, suvarma sistemləri və texnikaları təqdim olundu. B2B görüşlər sayəsində fermerlər beynəlxalq investorlar və texnologiya təchizatçıları ilə birbaşa əməkdaşlıq imkanı əldə etdilər.":
      { en: "In the exhibition area, the latest agricultural drones, irrigation systems and machinery from Hekaro, Stoller, Hi-tech Water Systems, Rostselmash and other companies were presented. Thanks to the B2B meetings, farmers gained the chance to cooperate directly with international investors and technology suppliers.",
        tr: "Fuar alanında Hekaro, Stoller, Hi-tech Water Systems, Rostselmash ve diğer şirketlerin en yeni tarım dronları, sulama sistemleri ve makineleri sunuldu. B2B görüşmeleri sayesinde çiftçiler, uluslararası yatırımcılar ve teknoloji tedarikçileriyle doğrudan iş birliği imkânı elde etti." },
    "Seminarlar · 2023": { en: "Seminars · 2023", tr: "Seminerler · 2023" },
    "Seminar müzakirələri": { en: "Seminar discussions", tr: "Seminer tartışmaları" },
    "5 seminar — hər birinin posteri, moderatoru və spikerləri. Sürüşdürün və ya postere toxunaraq tam ölçüdə baxın.":
      { en: "5 seminars — each with its poster, moderator and speakers. Swipe, or tap a poster to view it full size.",
        tr: "5 seminer — her birinin afişi, moderatörü ve konuşmacıları. Kaydırın veya afişe dokunarak tam boyutta görüntüleyin." },
    "Seminar 1 · 28 Fevral": { en: "Seminar 1 · 28 February", tr: "Seminer 1 · 28 Şubat" },
    "Seminar 2 · 28 Fevral": { en: "Seminar 2 · 28 February", tr: "Seminer 2 · 28 Şubat" },
    "Seminar 3 · 1 Mart": { en: "Seminar 3 · 1 March", tr: "Seminer 3 · 1 Mart" },
    "Seminar 4 · 1 Mart": { en: "Seminar 4 · 1 March", tr: "Seminer 4 · 1 Mart" },
    "Seminar 5 · 1 Mart": { en: "Seminar 5 · 1 March", tr: "Seminer 5 · 1 Mart" },
    "Kənd təsərrüfatında Türkiyə – Azərbaycan; vizyon və əlaqələr": { en: "Türkiye – Azerbaijan in agriculture; vision and relations", tr: "Tarımda Türkiye – Azerbaycan; vizyon ve ilişkiler" },
    "Aqrar sahədə həyata keçirilən innovasiyalar": { en: "Innovations implemented in agriculture", tr: "Tarım alanında hayata geçirilen inovasyonlar" },
    "Meyvəçilik sahəsində hazırkı vəziyyət və gələcək perspektivlər": { en: "The current situation and future prospects in fruit growing", tr: "Meyvecilik alanında mevcut durum ve gelecek perspektifleri" },
    "Kənd təsərrüfatında suyun əhəmiyyəti və suvarma texnologiyaları": { en: "The importance of water in agriculture and irrigation technologies", tr: "Tarımda suyun önemi ve sulama teknolojileri" },
    "Türkiyədən Azərbaycana gətiriləcək kənd təsərrüfatı texnologiyaları": { en: "Agricultural technologies to be brought from Türkiye to Azerbaijan", tr: "Türkiye'den Azerbaycan'a getirilecek tarım teknolojileri" },
    "Fəxri qonaqlar · 2023": { en: "Honorary guests · 2023", tr: "Onur konukları · 2023" },
    "İlk forumun rəsmi açılışında dövlət qurumlarının, beynəlxalq təşkilatların və diplomatik korpusların yüksək rütbəli nümayəndələri çıxış etdilər.":
      { en: "At the official opening of the first edition, high-ranking representatives of state institutions, international organisations and diplomatic corps spoke.",
        tr: "İlk forumun resmi açılışında devlet kurumlarının, uluslararası kuruluşların ve diplomatik misyonların üst düzey temsilcileri konuşma yaptı." },
    "Rəsmi açılış · 2023": { en: "Official opening · 2023", tr: "Resmi açılış · 2023" },
    "Türkiyənin Azərbaycandakı səfiri": { en: "Ambassador of Türkiye to Azerbaijan", tr: "Türkiye'nin Azerbaycan Büyükelçisi" },
    "Milli Məclis, Aqrar Siyasət Komitəsinin üzvü": { en: "National Assembly, member of the Agrarian Policy Committee", tr: "Milli Meclis, Tarım Politikası Komitesi üyesi" },
    "KOBİA İdarə Heyətinin Sədri": { en: "Chairman of the SMBDA Board", tr: "KOBİA Yönetim Kurulu Başkanı" },
    "FAO Azərbaycan nümayəndəsinin müavini": { en: "Deputy FAO Representative in Azerbaijan", tr: "FAO Azerbaycan temsilci yardımcısı" },
    "Agro TV Türkiyə və Azərbaycan rəhbəri": { en: "Head of Agro TV Türkiye and Azerbaijan", tr: "Agro TV Türkiye ve Azerbaycan yöneticisi" },
    "KOBSKA İdarə Heyətinin Sədri": { en: "Chair of the ASEC Board", tr: "KOBSKA Yönetim Kurulu Başkanı" },

    /* ---------- gallery ---------- */
    "Forumdan görüntülər": { en: "Images from the forum", tr: "Forumdan görüntüler" },
    "2023 və 2024 forumlarının açılış mərasimləri, panellər, sərgi zonası və B2B görüşlərindən seçilmiş anlar.":
      { en: "Selected moments from the opening ceremonies, panels, exhibition area and B2B meetings of the 2023 and 2024 editions.",
        tr: "2023 ve 2024 forumlarının açılış törenleri, panelleri, fuar alanı ve B2B görüşmelerinden seçilmiş anlar." },
    "2023 · Açılış mərasimi": { en: "2023 · Opening ceremony", tr: "2023 · Açılış töreni" },
    "2024 · İştirakçılar": { en: "2024 · Participants", tr: "2024 · Katılımcılar" },
    "2023 · Fəxri qonaqlar": { en: "2023 · Honorary guests", tr: "2023 · Onur konukları" },
    "2024 · Panel": { en: "2024 · Panel", tr: "2024 · Panel" },
    "2023 · Sərgi": { en: "2023 · Exhibition", tr: "2023 · Fuar" },
    "2024 · B2B": { en: "2024 · B2B", tr: "2024 · B2B" },
    "2023 · Salon": { en: "2023 · Hall", tr: "2023 · Salon" },
    "2024 · Sərgi": { en: "2024 · Exhibition", tr: "2024 · Fuar" },
    "2023 · Panel": { en: "2023 · Panel", tr: "2023 · Panel" },
    "2024 · Açılış": { en: "2024 · Opening", tr: "2024 · Açılış" },
    "2023 · Görüşlər": { en: "2023 · Meetings", tr: "2023 · Görüşmeler" },

    /* ---------- cta / footer ---------- */
    "Forum 2026": { en: "Forum 2026", tr: "Forum 2026" },
    "Növbəti Foruma biletlər": { en: "Tickets for the next edition", tr: "Sonraki Forum biletleri" },
    "International Agro Business Forum 2026 biletləri": { en: "International Agro Business Forum 2026 tickets go on sale via", tr: "International Agro Business Forum 2026 biletleri" },
    "üzərindən satışa çıxarılır. İştirakçı, spiker və ya tərəfdaş olmaq üçün bizimlə əlaqə saxlayın.":
      { en: ". Contact us to take part as a participant, speaker or partner.",
        tr: " üzerinden satışa sunulmaktadır. Katılımcı, konuşmacı veya ortak olmak için bizimle iletişime geçin." },
    "Rəsmi bilet": { en: "Official ticketing", tr: "Resmi bilet" },
    "tərəfdaşı": { en: "partner", tr: "ortağı" },
    "Tərəfdaşlıq üçün əlaqə": { en: "Contact us about partnership", tr: "Ortaklık için iletişim" },
    "Aqrar sahədə beynəlxalq əməkdaşlıq, innovasiya və investisiya platforması. Bakı, Azərbaycan.":
      { en: "A platform for international cooperation, innovation and investment in agriculture. Baku, Azerbaijan.",
        tr: "Tarım alanında uluslararası iş birliği, inovasyon ve yatırım platformu. Bakü, Azerbaycan." },
    "Forum": { en: "Forum", tr: "Forum" },
    "2023 forumu": { en: "2023 edition", tr: "2023 forumu" },
    "2024 forumu": { en: "2024 edition", tr: "2024 forumu" },
    "2026 forumu": { en: "2026 edition", tr: "2026 forumu" },
    "Bölmələr": { en: "Sections", tr: "Bölümler" },
    "Panellər": { en: "Panels", tr: "Paneller" },
    "Spikerlər": { en: "Speakers", tr: "Konuşmacılar" },
    "Bakı, Azərbaycan": { en: "Baku, Azerbaijan", tr: "Bakü, Azerbaycan" },
    "Biletlər:": { en: "Tickets:", tr: "Biletler:" },
    "© 2023–2026 International Agro Business Forum. Bütün hüquqlar qorunur.":
      { en: "© 2023–2026 International Agro Business Forum. All rights reserved.",
        tr: "© 2023–2026 International Agro Business Forum. Tüm hakları saklıdır." },

    /* ---------- aria-labels / search UI ---------- */
    "Menyu": { en: "Menu", tr: "Menü" },
    "Əvvəlki": { en: "Previous", tr: "Önceki" },
    "Növbəti": { en: "Next", tr: "Sonraki" },
    "Bağla": { en: "Close", tr: "Kapat" },
    "Yuxarı": { en: "Back to top", tr: "Yukarı" },
    "Saytda axtarış": { en: "Search the site", tr: "Sitede arama" },
    "Axtarış sorğusu": { en: "Search query", tr: "Arama sorgusu" },
    "Bölmə, spiker və ya mövzu axtarın…": { en: "Search a section, speaker or topic…", tr: "Bölüm, konuşmacı veya konu arayın…" },
    "Nəticə tapılmadı": { en: "No results found", tr: "Sonuç bulunamadı" },
    "Ən azı 2 hərf yazın": { en: "Type at least 2 characters", tr: "En az 2 karakter yazın" }
  };

  var ATTRS = ["aria-label", "placeholder", "title"];
  var LANGS = ["az", "en", "tr"];
  var STORE = "iabf-lang";
  var current = "az";

  /* remember the original AZ content once, so we can always translate from source */
  var textNodes = [];
  function collect() {
    textNodes.length = 0;
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var n;
    while ((n = w.nextNode())) {
      var t = n.textContent.trim();
      if (!t) continue;
      if (n.parentElement && n.parentElement.closest("script,style")) continue;
      if (!DICT[t]) continue;
      textNodes.push({ node: n, az: n.textContent });
    }
  }

  var attrNodes = [];
  function collectAttrs() {
    attrNodes.length = 0;
    ATTRS.forEach(function (a) {
      document.querySelectorAll("[" + a + "]").forEach(function (el) {
        var v = el.getAttribute(a);
        if (v && DICT[v.trim()]) attrNodes.push({ el: el, attr: a, az: v });
      });
    });
  }

  function translate(lang) {
    current = LANGS.indexOf(lang) === -1 ? "az" : lang;

    textNodes.forEach(function (item) {
      var key = item.az.trim();
      var entry = DICT[key];
      var out = current === "az" || !entry ? key : (entry[current] || key);
      // keep the original surrounding whitespace
      item.node.textContent = item.az.replace(key, out);
    });

    attrNodes.forEach(function (item) {
      var key = item.az.trim();
      var entry = DICT[key];
      item.el.setAttribute(item.attr, current === "az" || !entry ? key : (entry[current] || key));
    });

    document.documentElement.setAttribute("lang", current);
    document.querySelectorAll(".lang [data-lang]").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === current);
    });

    try { localStorage.setItem(STORE, current); } catch (e) {}
    document.dispatchEvent(new CustomEvent("iabf:langchange", { detail: { lang: current } }));
  }

  function init() {
    collect();
    collectAttrs();

    document.querySelectorAll(".lang [data-lang]").forEach(function (b) {
      b.addEventListener("click", function (e) {
        e.preventDefault();
        translate(b.getAttribute("data-lang"));
      });
    });

    var saved = null;
    try { saved = localStorage.getItem(STORE); } catch (e) {}
    if (saved && saved !== "az") translate(saved);
    else translate("az");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  /* translate a string produced at runtime (search UI messages etc.) */
  function t(az) {
    var entry = DICT[az];
    return current === "az" || !entry ? az : (entry[current] || az);
  }

  window.IABF_I18N = { translate: translate, current: function () { return current; }, t: t };
})();
