/**
 * Overthink Agency - Kurumsal Kimlik ve İçerik Veri Modülü
 * Tüm metinler, ilkeler, değerler ve kurumsal kimlik öğeleri
 * doğrudan resmi Overthink Agency PDF kılavuzundan derlenmiştir.
 * "marka" ifadeleri kurum yönergelerine göre "kurum" olarak yapılandırılmıştır.
 */

export interface CorporateItem {
  id: string;
  type: 'ilke' | 'deger';
  index: number; // 0 to 11
  angle: number; // 0 to 330
  title: string;
  categoryName: string;
  summary: string;
  fullText: string;
  tag: string;
  quote?: string;
}

export interface ThinkBoxCategory {
  id: string;
  name: string;
  title: string;
  description: string;
  bgLight: string;
  borderLight: string;
  badgeColor: string;
  textColor: string;
  icon: string;
  sampleQuestion: string;
  cardPrompts: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  highlight: string;
  spokeCount: number;
}

export interface BrandAsset {
  id: string;
  name: string;
  category: string;
  description: string;
  mockupType: 'stationery' | 'notebook' | 'badge' | 'card' | 'powerbank' | 'calendar' | 'pen';
}

// 7 İlkelerimiz + 5 Değerlerimiz = Tam 12 Parça (12'li Loading İkonunun her bir çizgisine birebir denk gelir)
export const CORPORATE_ITEMS: CorporateItem[] = [
  // 7 İlkelerimiz
  {
    id: 'ilke-1',
    type: 'ilke',
    index: 0,
    angle: 0,
    title: 'Sorgulamadan Kabullenmeyiz',
    categoryName: 'İlke',
    tag: 'Sorgulama & Başlangıç',
    summary: 'İlk akla gelenle yetinmiyor, sorular soruyor ve farklı bakış açılarını değerlendiriyoruz.',
    fullText: 'İlk akla gelenle yetinmiyor, sorular soruyor ve farklı bakış açılarını değerlendiriyoruz. Çünkü bizim için her iyi fikir, doğru soruyla başlar..',
    quote: 'Her iyi fikir, doğru soruyla başlar.'
  },
  {
    id: 'ilke-2',
    type: 'ilke',
    index: 1,
    angle: 30,
    title: 'Daha Fazlasını Düşünerek Gelişiriz',
    categoryName: 'İlke',
    tag: 'Sürekli Gelişim',
    summary: 'Araştırıyor, öğreniyor ve kendimizi sürekli geliştiriyoruz.',
    fullText: 'Araştırıyor, öğreniyor ve kendimizi sürekli geliştiriyoruz. Aklı ve bilimi rehber edinerek yeni fikirler üretmeyi ve iletişimin geleceğine katkı sağlamayı hedefliyoruz.',
    quote: 'Aklı ve bilimi rehber edinerek iletişimin geleceğine katkı sağlıyoruz.'
  },
  {
    id: 'ilke-3',
    type: 'ilke',
    index: 2,
    angle: 60,
    title: 'Görünenden Fazlasını Ararız',
    categoryName: 'İlke',
    tag: 'Derinlik & Anlam',
    summary: 'İlk bakışta fark edilmeyen anlamları keşfediyor, söylenenlerin yanında söylenmeyenleri de dikkate alıyoruz.',
    fullText: 'İlk bakışta fark edilmeyen anlamları keşfediyor, söylenenlerin yanında söylenmeyenleri de dikkate alıyoruz. Çünkü iletişimin gerçek anlamı her zaman ilk bakışta görünmez.',
    quote: 'İletişimin gerçek anlamı her zaman ilk bakışta görünmez.'
  },
  {
    id: 'ilke-4',
    type: 'ilke',
    index: 3,
    angle: 90,
    title: 'Her Mesajın Bir Etkisi Olduğunu Biliriz',
    categoryName: 'İlke',
    tag: 'Etki Odaklılık',
    summary: 'Ürettiğimiz iletişimin hedef kitlede ve toplumda yaratabileceği sonuçları hesaba katıyoruz.',
    fullText: 'Ürettiğimiz iletişimin hedef kitlede ve toplumda yaratabileceği sonuçları hesaba katıyoruz. Bizim için önemli olan yalnızca sadece mesajı üretmek değil, geride bırakacağı etkidir.',
    quote: 'Önemli olan sadece mesajı üretmek değil, geride bırakacağı etkidir.'
  },
  {
    id: 'ilke-5',
    type: 'ilke',
    index: 4,
    angle: 120,
    title: 'Söylenenin Ötesini Düşünürüz',
    categoryName: 'İlke',
    tag: 'Duygu & Algı',
    summary: 'Yalnızca ne söyleyeceğimize değil, mesajın nasıl anlaşılacağına odaklanıyoruz.',
    fullText: 'Yalnızca ne söyleyeceğimize değil, mesajın nasıl anlaşılacağına ve hangi duyguları uyandıracağına da odaklanıyoruz.',
    quote: 'Mesajın hangi duyguları uyandıracağını hesaba katarız.'
  },
  {
    id: 'ilke-6',
    type: 'ilke',
    index: 5,
    angle: 150,
    title: 'Tek Bir İhtimale Bağlı Kalmayız',
    categoryName: 'İlke',
    tag: 'Çok Boyutlu Düşünce',
    summary: 'Farklı olasılıkları düşünüyor, alışılmışın dışına çıkıyor ve kararlarımızı güçlendiriyoruz.',
    fullText: 'Farklı olasılıkları düşünüyor, alışılmışın dışına çıkıyor ve kararlarımızı farklı bakış açılarıyla güçlendiriyoruz.',
    quote: 'Alışılmışın dışına çıkıyor, farklı olasılıkları değerlendiriyoruz.'
  },
  {
    id: 'ilke-7',
    type: 'ilke',
    index: 6,
    angle: 180,
    title: 'Ayrıntıları Önemseriz',
    categoryName: 'İlke',
    tag: 'Titizlik',
    summary: 'Bir kelimenin, rengin veya görselin taşıdığı anlamı önemsiyoruz.',
    fullText: 'Bir kelimenin, rengin veya görselin taşıdığı anlamı önemsiyoruz. Çünkü bazen bir ayrıntı, bütün iletişimin anlamını değiştirebilir.',
    quote: 'Bazen bir ayrıntı, bütün iletişimin anlamını değiştirebilir.'
  },

  // 5 Değerlerimiz
  {
    id: 'deger-1',
    type: 'deger',
    index: 7,
    angle: 210,
    title: 'Merak',
    categoryName: 'Değer',
    tag: 'Keşif Ruhu',
    summary: 'Her fikrin daha iyi bir versiyonu olduğuna inanırız. Bu yüzden yüzeyde kalmaz, soru sorarız.',
    fullText: 'Her fikrin daha iyi bir versiyonu olduğuna inanırız. Bu yüzden yüzeyde kalmaz, soru sorar, araştırır ve görünmeyeni anlamaya çalışırız.',
    quote: 'Her fikrin daima daha iyi bir versiyonu vardır.'
  },
  {
    id: 'deger-2',
    type: 'deger',
    index: 8,
    angle: 240,
    title: 'Detaycılık',
    categoryName: 'Değer',
    tag: 'Hassasiyet',
    summary: 'Detayları yalnızca tamamlayıcı unsurlar değil, kalitenin kritik parçaları olarak görürüz.',
    fullText: 'Detayları yalnızca tamamlayıcı unsurlar olarak değil, sonucun kalitesini belirleyen kritik parçalar olarak görürüz. Küçük ayrıntıların büyük farklar yarattığını biliriz.',
    quote: 'Küçük ayrıntılar büyük farklar yaratır.'
  },
  {
    id: 'deger-3',
    type: 'deger',
    index: 9,
    angle: 270,
    title: 'Özen',
    categoryName: 'Değer',
    tag: 'Zanaat & Titizlik',
    summary: 'İyi işlerin tesadüfen ortaya çıkmadığına inanırız. Her aşamaya dikkat ve titizlikle yaklaşırız.',
    fullText: 'İyi işlerin tesadüfen ortaya çıkmadığına inanırız. Her fikre, her kelimeye ve her aşamaya aynı dikkat ve titizlikle yaklaşırız.',
    quote: 'İyi işler tesadüfen ortaya çıkmaz.'
  },
  {
    id: 'deger-4',
    type: 'deger',
    index: 10,
    angle: 300,
    title: 'Sorumluluk',
    categoryName: 'Değer',
    tag: 'Güven & Sahiplenme',
    summary: 'Düşüncelerimizin, kararlarımızın ve ortaya koyduğumuz işlerin sorumluluğunu taşırız.',
    fullText: 'Düşüncelerimizin, kararlarımızın ve ortaya koyduğumuz işlerin sorumluluğunu taşırız. Çünkü güvenin, sahiplenmeyle kurulduğunu biliriz.',
    quote: 'Güven, sahiplenmeyle kurulur.'
  },
  {
    id: 'deger-5',
    type: 'deger',
    index: 11,
    angle: 330,
    title: 'Esnek Düşünce',
    categoryName: 'Değer',
    tag: 'Adaptasyon',
    summary: 'Tek bir doğruya bağlı kalmayız. Değişen koşullara uyum sağlar, yeni olasılıklara açık kalırız.',
    fullText: 'Tek bir doğruya bağlı kalmayız. Farklı bakış açılarını değerlendirir, değişen koşullara uyum sağlar ve yeni olasılıklara açık kalırız.',
    quote: 'Yeni olasılıklara ve değişime daima açığız.'
  }
];

export const THINK_BOX_CATEGORIES: ThinkBoxCategory[] = [
  {
    id: 'farkli-bak',
    name: 'Farklı Bak',
    title: 'Farklı Bak',
    description: 'Alışılmışın dışına çıkmak ve gözden kaçan alternatif perspektifleri keşfetmek için sorular.',
    bgLight: '#fef3c7', // amber-100 pastel
    borderLight: '#fde68a',
    badgeColor: '#b45309',
    textColor: '#78350f',
    icon: 'Eye',
    sampleQuestion: 'Herkes aynı şeyi düşünüyorsa hangi ihtimali gözden kaçırıyoruz?',
    cardPrompts: [
      'Herkes aynı şeyi düşünüyorsa hangi ihtimali gözden kaçırıyoruz?',
      'Bu durumu tam tersinden okursak ne gibi bir fırsat doğar?',
      'Sektör dışındaki bir kurum bu sorunu nasıl çözerdi?',
      'Bu fikrin en zayıf yönü nedir ve onu avantaja nasıl çevirebiliriz?',
      'Bu konuya 10 yıl sonraki bir gelecekten baksaydık ne söylerdik?'
    ]
  },
  {
    id: 'hedef-kitleni-anla',
    name: 'Hedef Kitleni Anla',
    title: 'Hedef Kitleni Anla',
    description: 'Mesajın alıcıda uyandıracağı hissi, empatiyi ve toplumsal karşılığı ölçen sorular.',
    bgLight: '#dbeafe', // blue-100 pastel
    borderLight: '#bfdbfe',
    badgeColor: '#1d4ed8',
    textColor: '#1e3a8a',
    icon: 'Users',
    sampleQuestion: 'Bu mesajı hedef kitlemiz nasıl yorumlayabilir?',
    cardPrompts: [
      'Bu mesajı hedef kitlemiz ilk anda nasıl yorumlayabilir?',
      'Hedef kitlemizin bu mesajı gördüğünde hissedeceği ilk duygu nedir?',
      'Bu iletişim dili hedef kitlemizde bir tereddüt ya da güvensizlik yaratır mı?',
      'Karşı tarafın hayatındaki hangi somut ihtiyaca doğrudan temas ediyoruz?',
      'Bu mesajı duyan biri, kurumumuzla ilgili yanındaki kişiye ne aktarır?'
    ]
  },
  {
    id: 'sorgula',
    name: 'Sorgula',
    title: 'Sorgula',
    description: 'İletişim kararlarını verilerle, mantıkla ve derin şüphecilikle temellendiren sorular.',
    bgLight: '#fee2e2', // red-100 pastel
    borderLight: '#fecaca',
    badgeColor: '#b91c1c',
    textColor: '#7f1d1d',
    icon: 'Search',
    sampleQuestion: 'Bu fikri hangi verilerle destekleyebiliriz?',
    cardPrompts: [
      'Bu fikri hangi somut verilerle ve içgörülerle destekleyebiliriz?',
      'Neden başka bir kelime veya renk değil de tam olarak bunu seçiyoruz?',
      'Varsayımlarımızın ne kadarı gerçek kullanıcı davranışına dayanıyor?',
      'Bu fikri hayata geçirmeseydik kurumumuz ne kaybederdi?',
      'İddiamızı kanıtlayacak en ikna edici gösterge nedir?'
    ]
  },
  {
    id: 'yeniden-tasarla',
    name: 'Yeniden Tasarla',
    title: 'Yeniden Tasarla',
    description: 'Yaratıcılığı sınırlardan özgürleştirerek radikal yalınlık ve estetik arayan sorular.',
    bgLight: '#ffedd5', // orange-100 pastel
    borderLight: '#fed7aa',
    badgeColor: '#c2410c',
    textColor: '#7c2d12',
    icon: 'Sparkles',
    sampleQuestion: 'Bu kampanyayı sadece bir görselle anlatman gerekseydi ne tasarlardın?',
    cardPrompts: [
      'Bu kampanyayı sadece tek bir görsel veya sembolle anlatman gerekseydi ne tasarlardın?',
      'Bu mesajı 3 kelimeye indirgesek hangi kelimeler ayakta kalırdı?',
      'Kelimeleri tamamen kaldırsaydık tasarımız hangi duyguyu konuşurdu?',
      'Mevcut kalıpları yıkıp sıfırdan başlasaydık ilk adımımız ne olurdu?',
      'Karmaşık bir stratejiyi en sade biçimde anlatmanın yolu nedir?'
    ]
  },
  {
    id: 'bag-kur',
    name: 'Bağ Kur',
    title: 'Bağ Kur',
    description: 'İletişimi tek yönlü aktarımdan güvene dayalı, sürdürülebilir insan ilişkisine dönüştüren sorular.',
    bgLight: '#dcfce7', // green-100 pastel
    borderLight: '#bbf7d0',
    badgeColor: '#15803d',
    textColor: '#14532d',
    icon: 'MessageCircle',
    sampleQuestion: 'Bu fikir toplumda nasıl bir etki yaratabilir?',
    cardPrompts: [
      'Bu fikir toplumda ve kitlede nasıl sürdürülebilir bir etki yaratabilir?',
      'İnsanların bu iletişimi yalnızca izlemesi değil, sahiplenmesi için ne gerekiyor?',
      'Kurumumuzla takipçileri arasında karşılıklı güveni pekiştiren unsur nedir?',
      'Bu fikir bir sohbet konusu olsaydı insanlar ne konuşurdu?',
      'Zaman geçse bile hatırlanacak o samimi temas noktası neresidir?'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: '1', name: 'Zehra İBİŞ', role: 'Ajans Başkanı & Grafiker', initials: 'Zİ', highlight: 'Yaratıcı vizyon, kurumsal tasarım ve stratejik yönetim liderliği.', spokeCount: 12 },
  { id: '2', name: 'Dürdane KİRİŞ', role: 'Proje Yöneticisi & Metin Yazarı', initials: 'DK', highlight: 'Sözcüklerin ardındaki etkiyi kurgulayan hikâye ve süreç mimarisi.', spokeCount: 12 },
  { id: '3', name: 'Gül TUNCER', role: 'Halkla İlişkiler Uzmanı', initials: 'GT', highlight: 'Kurum ve toplum arasında güven temelli kalıcı ilişkiler.', spokeCount: 12 },
  { id: '4', name: 'Tuana GEZER', role: 'Pazarlama İletişimi Uzmanı', initials: 'TG', highlight: 'Stratejik pazar analitiği ve etkileşim odaklı kurgular.', spokeCount: 12 },
  { id: '5', name: 'Ebru PİSTİL', role: 'Sosyal Medya Uzmanı', initials: 'EP', highlight: 'Dinamik dijital anlatı ve topluluk yönetimi uzmanlığı.', spokeCount: 12 },
  { id: '6', name: 'Gamze YARDIMCI', role: 'Medya Planlama Uzmanı', initials: 'GY', highlight: 'Doğru mesajın doğru mecrada yankı bulmasını sağlayan planlama.', spokeCount: 12 },
  { id: '7', name: 'Zeynel ZEYBEK', role: 'Medya Planlama Uzmanı', initials: 'ZZ', highlight: 'Kanal optimizasyonu, bütçe yönetimi ve erişim stratejisi.', spokeCount: 12 },
  { id: '8', name: 'Kengi ERİCEK', role: 'Araştırma & Strateji Uzmanı', initials: 'KE', highlight: 'Derin veri analitiği, kullanıcı içgörüleri ve strateji haritaları.', spokeCount: 12 },
  { id: '9', name: 'Pamir GEVREK', role: 'Görsel İletişim & Prodüksiyon Uzmanı', initials: 'PG', highlight: 'Görsel estetik, video kurgusu ve prodüksiyon zanaatı.', spokeCount: 12 },
  { id: '10', name: 'Elmira SHIKHILI', role: 'Medya İlişkileri Uzmanı', initials: 'ES', highlight: 'Basın iletişimi, itibar yönetimi ve medya paydaş ağları.', spokeCount: 12 }
];

export const BRAND_ASSETS: BrandAsset[] = [
  {
    id: 'asset-1',
    name: 'Masa Takvimi',
    category: 'Masaüstü & Ofis',
    description: 'Her ay Overthink kurum prensiplerini ve Think Box sorularını hatırlatan minimalist masa takvimi.',
    mockupType: 'calendar'
  },
  {
    id: 'asset-2',
    name: 'Kurumsal Not Defteri',
    category: 'Kırtasiye',
    description: 'Özel dikişli, Arimo tipografisi ve kabartma loading logolu krem defter.',
    mockupType: 'notebook'
  },
  {
    id: 'asset-3',
    name: 'Loading Taşınabilir Şarj Cihazı (Powerbank)',
    category: 'Teknoloji',
    description: 'Kesintisiz düşünce gücünü temsil eden, LED göstergeli yuvarlak loading logolu powerbank.',
    mockupType: 'powerbank'
  },
  {
    id: 'asset-4',
    name: 'Kurumsal Yaka Kartı & Boyun Askısı',
    category: 'Ofis & Etkinlik',
    description: 'Lacivert kordon ve loading ikonlu mat akrilik kurum kimlik kartı.',
    mockupType: 'badge'
  },
  {
    id: 'asset-5',
    name: 'Kartvizit & Antetli Kağıt Seti',
    category: 'Kurumsal Kimlik',
    description: 'Dokulu krem pamuklu kağıda sıcak lacivert baskılı kartvizit ve resmi evrak seti.',
    mockupType: 'card'
  },
  {
    id: 'asset-6',
    name: 'Metal Tükenmez Kalem',
    category: 'Kırtasiye',
    description: 'Lazer kazıma "verthink agency" imzalı fırçalanmış çelik gövde.',
    mockupType: 'pen'
  }
];

export const AGENCY_DETAILS = {
  name: 'Overthink Agency',
  slogan: 'Think More, Connect Better.',
  font: 'Arimo',
  colors: {
    navy: '#0a0059',
    beige: '#d5d2ca',
    cream: '#fffdf1'
  },
  contact: {
    instagram: 'overthinkagency_',
    instagramUrl: 'https://instagram.com/overthinkagency_',
    email: 'info.overthinkagency@gmail.com'
  },
  story: {
    title: 'OVERTHINK’İN HİKAYESİ',
    paragraphs: [
      'İlk bakışta "Overthink" kelimesi olumsuz bir çağrışım yaratabilir. Çünkü fazla düşünmek, günlük hayatta çoğu zaman bir sorun olarak görülür.',
      'Ancak Overthink Agency, tam da bu olumsuz çağrışımı farklı bir bakış açısıyla ele alıyor. Çünkü iletişimde mesele yalnızca bir şey söylemek değil, söylediğiniz şeyin karşı tarafta ne etki yaratacağını bilmektir.',
      'Peki, Overthink Agency bu olumsuz çağrışımı nasıl bir avantaja dönüştürüyor? Bir kelimeyi seçmeden önce ne hissettireceğini, bir mesajı yayımlamadan önce nasıl algılanacağını, bir görseli veya rengi kullanmadan önce hangi duyguyu uyandıracağını düşünüyor. Bir kurumu yalnızca nasıl tanıtacağını değil, nasıl tanınacağını; ne söyleyeceğini değil, nasıl anlaşılacağını sorguluyor.',
      'Çünkü bizim için önemli olan yalnızca mesajın kendisi değil, mesajın geride bırakacağı etkidir.',
      'Bir kelime güven oluşturabilir. Bir renk kurumsal kimliği güçlendirebilir. Bir görsel samimiyet hissettirebilir ya da bir ifade yanlış anlaşılmalara, yanlış bir iletişim tercihi ise güven kaybına yol açabilir.',
      'Overthink Agency, işte bu noktada fark yaratmayı amaçlıyor. İletişim kararlarını rastlantıya bırakmak yerine kelimeleri, görselleri, mesajları ve hedef kitlenin olası tepkilerini birlikte değerlendiriyor. Böylece kurumların kendilerini daha doğru ifade etmelerine, daha samimi bir algı oluşturmalarına ve toplumla güvene dayalı ilişkiler geliştirmelerine katkı sağlıyor.',
      'İşte Overthink\'in avantajı tam olarak bu: Başkalarının yalnızca ne söyleyeceğini düşündüğü yerde, söylenenin nasıl bir etki yaratacağını da düşünmek.',
      'Biz overthink\'i; merak etmek, detayları fark etmek, farklı ihtimalleri değerlendirmek, insanların ne hissedeceğini düşünmek ve iletişimin yalnızca bugünkü değil, gelecekteki etkisini de hesaba katmak anlamında kullanıyoruz.',
      'Kısacası; Diğerleri mesajı üretirken, biz o mesajın yaratacağı etkiyi de düşünüyoruz. Diğerleri sadece iletişim kurarken, biz o iletişimin insanlarda bırakacağı hissi de düşünüyoruz. Ve bizim "overthink" dememizin nedeni tam olarak bu.',
      'Çünkü iyi iletişim, düşünmeyi bıraktığımız yerde değil; daha fazlasını düşünmeye başladığımız yerde ortaya çıkıyor.'
    ]
  },
  logoStory: {
    title: 'LOGOMUZUN HİKÂYESİ',
    paragraphs: [
      'Overthink Agency’nin logosu, ajansımızın temel düşüncesini görsel bir kimliğe dönüştürür. Bizim için fazla düşünmek, ayrıntılarda kaybolmak değil; görünenden fazlasını sorgulamak, farklı ihtimalleri değerlendirmek ve her tercihin yaratacağı etkiyi öngörmektir. Bu yüzden sembolümüz birbirini takip eden çizgilerden oluşan loading ikonudur.',
      'Logomuzdaki renk geçişleri düşünceler arası geçişi ve esnek düşünce yapımızı yansıtmayı hedefler.',
      'Logomuzun sade ve çağdaş yaklaşımı, derin düşüncenin karmaşık olmak zorunda olmadığını; doğru ifade edildiğinde anlam yarattığını temsil eder.'
    ],
    symbolMeaning: 'Overthink Agency logosundaki sembol, loading ikonundan ilham alır. Loading ikonu, arka planda devam eden süreci temsil eder; tıpkı durmadan düşünen, sorgulayan ve fikirler arasında yeni bağlantılar kuran bir zihin gibi.',
    navyMeaning: 'Lacivert tonlar güveni, uzmanlığı ve stratejik bakış açısını temsil eder. Ton geçişleri ise düşünceler arasındaki bağlantıları, fikirlerin birbirini geliştirmesini ve dönüşümünü ifade eder.',
    lowercaseAgencyMeaning: 'Agency kelimesini küçük yazmamızın sebebi ismimizin önüne geçmemesini sağlamaktır.',
    fontMeaning: 'Sade ve kalın yazı karakterleri net; okunabilir, güncel ve yalın bir görünüm oluşturuyor. Bu sadelik, düşünce sürecinin derinliğini karmaşık bir görsel anlatıma ihtiyaç duymadan aktarmaya yardımcı oluyor.'
  },
  mission: {
    title: 'MİSYONUMUZ',
    text: 'Overthink Agency olarak misyonumuz, derin düşünme anlayışımızı yaratıcı ve stratejik iletişim çözümlerine dönüştürmektir. Kelimelerin taşıdığı anlamı, mesajların nasıl algılanacağını ve görsellerin uyandıracağı duyguları değerlendirerek kurumların kendilerini özgün biçimde ifade etmelerine, hedef kitleleriyle anlamlı bağlar kurmalarına ve toplumla güvene dayalı, sürdürülebilir ilişkiler geliştirmelerine katkı sağlıyoruz.'
  },
  vision: {
    title: 'VİZYONUMUZ',
    text: 'Overthink Agency olarak vizyonumuz, araştıran, sorgulayan ve değişen iletişim ihtiyaçlarını çok yönlü değerlendiren yaklaşımımızla yalnızca bugünün ihtiyaçlarına cevap vermeyi değil, geleceğin iletişim anlayışına da katkı sağlayarak fazla düşünmeyi bir kusur değil, stratejik bir avantaja dönüştürerek iletişim sektöründe fark yaratan ve kendine özgü düşünce biçimiyle iz bırakan bir ajans olmaktır.'
  },
  sloganMeaning: {
    title: '“Think more, Connect better”',
    text: 'Sloganımız, ismimizin arkasındaki düşünceyi ve bu düşüncenin ulaşmak istediği sonucu bir araya getiriyor. Daha fazla düşünmek, iletişimi farklı yönleriyle değerlendirmek; daha iyi bağ kurmak ise bu düşünceyi insanlar ve kurumlar arasında anlamlı, samimi ve güvene dayalı ilişkilere dönüştürmek demektir. Yani sloganımız yalnızca düşünmeyi değil düşüncenin sonunda ortaya çıkan güçlü iletişimi vurguluyor. Çünkü bizim için güçlü iletişim, yalnızca doğru mesajı vermek değil, o mesajla anlamlı bağlar kurabilmektir.'
  }
};

/**
 * Helper calculation functions for the circular spoke dial
 */
export function calculateCoordinates(index: number, total: number = 12, radius: number = 160, centerX: number = 200, centerY: number = 200) {
  // Start at top (-90 degrees) and rotate clockwise
  const angleDeg = (index * 360) / total - 90;
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: centerX + radius * Math.cos(angleRad),
    y: centerY + radius * Math.sin(angleRad),
    angleDeg: (index * 360) / total
  };
}

export function getItemsByType(type: 'ilke' | 'deger'): CorporateItem[] {
  return CORPORATE_ITEMS.filter(item => item.type === type);
}

export function getItemByIndex(index: number): CorporateItem | undefined {
  return CORPORATE_ITEMS.find(item => item.index === index);
}
