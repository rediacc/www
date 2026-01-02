---
title: Web Application
description: Understanding web application architecture and deployment with Rediacc.
category: Core Concepts
order: 1
language: en
---

# Rediacc Platformu Kullanım Kılavuzu

## Genel Bakış

**Rediacc**, yapay zeka destekli yedekleme hizmetleri sunan bir bulut platformudur.

Bu kılavuz, [https://www.rediacc.com/](https://www.rediacc.com/) adresindeki web arayüzünün temel kullanımını anlatır.

### Bu Kılavuzun Amacı

- Yeni kullanıcıların platforma hızlı şekilde adapte olmasını sağlamak
- Temel işlevleri (kaynak yönetimi, yedekleme) adım adım açıklamak

---

## 1. Hesap Oluşturma ve Giriş

### 1.1 Kayıt Olma

Rediacc platformunu kullanmaya başlamak için öncelikle bir hesap oluşturmanız gerekmektedir.

![Giriş Ekranı](/assets/images/UserGuideEng/01_login.png)
*(Resim 1: Ana sayfa giriş ekranı)*

1. Tarayıcıdan [https://www.rediacc.com/](https://www.rediacc.com/) adresine gidin.
2. Sağ üst köşedeki **Giriş** butonuna tıklayın.

![Kayıt Butonu](/assets/images/UserGuideEng/02_register.png)
*(Resim 2: Kayıt butonu)*

3. Açılan ekrandan **Kayıt** butonuna tıklayın.

4. Açılan formda aşağıdaki bilgileri doldurun:
   - **Organizasyon Adı**: Şirketinizin veya kuruluşunuzun adı
   - **E-posta**: Geçerli bir e-posta adresi
   - **Parola**: Güvenli bir parola (en az 8 karakter önerilir)

![Hesap Oluşturma Formu](/assets/images/UserGuideEng/03_create_account.png)
*(Resim 3: Hesap oluşturma formu)*

5. **Hesap Oluştur** butonuna tıklayın. E-posta adresinize bir doğrulama kodu gönderilecektir.

6. E-postanıza gelen doğrulama kodunu **Aktivasyon Kodu** alanına girin ve **Hesabı Doğrula** butonuna tıklayın.

![Doğrulama Kodu](/assets/images/UserGuideEng/04_verification_code.png)
*(Resim 4: E-posta doğrulama ekranı)*

> **İpucu**: Doğrulama e-postası gelmezse spam/junk klasörünüzü kontrol edin.

---

### 1.2 Giriş Yapma

Hesabınız oluşturulduktan sonra platforma giriş yapabilirsiniz.

1. Ana sayfada sağ üst köşedeki **Giriş** butonuna tıklayın.
2. E-posta ve parolanızı girin.
3. **Giriş Yap** butonuna tıklayın.

![Giriş Formu](/assets/images/UserGuideEng/05_sign_in.png)
*(Resim 5: Giriş formu)*

4. Başarılı girişten sonra **Genel Bakış** (Dashboard) ekranına yönlendirilirsiniz.

![Genel Bakış](/assets/images/UserGuideEng/06_dashboard.png)
*(Resim 6: Genel Bakış ekranı)*

---

## 2. Arayüz Tanıtımı

Giriş yaptıktan sonra karşınıza çıkan ekran temel olarak şu bölümlerden oluşur:

- **Organizasyon**: Kullanıcılar, takımlar ve erişim kontrolü
- **Makineler**: Sunucu ve depo yönetimi
- **Ayarlar**: Profil ve sistem ayarları
- **Depolama**: Depolama alanları yönetimi
- **Kimlik Bilgileri**: Erişim kimlik bilgileri
- **Kuyruk**: İş kuyruğu yönetimi
- **Denetim**: Sistem denetim kayıtları

---

## 2.1 Organizasyon - Kullanıcılar

Kullanıcı yönetimi, organizasyonunuzdaki kişilerin platforma erişimini kontrol etmenizi sağlar.

### 2.1.1 Kullanıcı Ekleme

1. Sol menüden **Organizasyon** > **Kullanıcılar** sekmesine tıklayın.
2. Sağ üst köşedeki **"+"** simgesine tıklayın.

![Kullanıcılar Listesi](/assets/images/UserGuideEng/07_users.png)
*(Resim 7: Kullanıcılar listesi)*

3. **Kullanıcı Oluştur** butonuna tıklayın ve açılan formu doldurun:
   - **E-posta**: Kullanıcının e-posta adresi
   - **Parola**: Geçici parola (kullanıcı sonra değiştirebilir)

![Kullanıcı Ekleme Formu](/assets/images/UserGuideEng/08_user_add.png)
*(Resim 8: Kullanıcı ekleme formu)*

4. **Oluştur** butonuna tıklayın. Kullanıcı listeye eklenecektir.

![Kullanıcı Listesi](/assets/images/UserGuideEng/09_user_list.png)
*(Resim 9: Güncellenmiş kullanıcı listesi)*

### 2.1.2 Kullanıcı İzinleri Atama

Kullanıcılara belirli izin grupları atayarak erişim yetkilerini yönetebilirsiniz.

1. **Organizasyon** > **Kullanıcılar** sekmesinden bir kullanıcı seçin.
2. **İzinler** butonuna tıklayın.

![Kullanıcı İzinleri](/assets/images/UserGuideEng/10_users_permissions.png)
*(Resim 10: Kullanıcı izinleri butonu)*

3. Açılan formdan bir **İzin Grubu** seçin.
4. **Ata** butonuna tıklayın.

![İzin Atama Formu](/assets/images/UserGuideEng/11_user_permissions_form.png)
*(Resim 11: İzin grubu atama formu)*

### 2.1.3 Kullanıcı Aktivasyonu

Devre dışı bırakılmış kullanıcıları tekrar aktif hale getirebilirsiniz.

1. **Kullanıcılar** listesinden devre dışı bir kullanıcı seçin.
2. **Etkinleştir** butonuna tıklayın.

![Kullanıcı Aktivasyonu](/assets/images/UserGuideEng/12_users_activation.png)
*(Resim 12: Aktivasyon butonu)*

3. Onay penceresinde **Evet** butonuna tıklayın.

![Aktivasyon Onayı](/assets/images/UserGuideEng/13_users_activation_confirm.png)
*(Resim 13: Aktivasyon onay penceresi)*

### 2.1.4 Kullanıcı Takibi (Trace)

Kullanıcı aktivitelerini izlemek için takip özelliğini kullanabilirsiniz.

1. Bir kullanıcı seçin ve **Takip** butonuna tıklayın.

![Kullanıcı Takibi](/assets/images/UserGuideEng/14_users_trace.png)
*(Resim 14: Takip butonu)*

2. Açılan ekranda kullanıcının geçmiş aktiviteleri listelenir.
3. **Dışa Aktar** butonundan istediğiniz formatta (CSV, Excel, PDF) rapor alabilirsiniz.

![Takip Dışa Aktarımı](/assets/images/UserGuideEng/15_user_trace_export.png)
*(Resim 15: Takip raporu dışa aktarımı)*

---

## 2.2 Organizasyon - Takımlar

Takımlar, kullanıcıları gruplandırarak kaynaklara toplu erişim sağlamanıza olanak tanır.

### 2.2.1 Takım Oluşturma

1. **Organizasyon** > **Takımlar** sekmesine gidin.
2. **Takım Oluştur** butonuna tıklayın.
3. Takım adını girin.

![Takım Oluşturma](/assets/images/UserGuideEng/16_teams_create.png)
*(Resim 16: Takım oluşturma formu)*

4. **Oluştur** butonuna tıklayın.

### 2.2.2 Takım Düzenleme

1. Düzenlemek istediğiniz takımı seçin.
2. **Düzenle** butonuna tıklayın.
3. Değişiklikleri yapın ve **Kaydet** butonuna tıklayın.

![Takım Düzenleme](/assets/images/UserGuideEng/17_teams_edit_form.png)
*(Resim 17: Takım düzenleme formu)*

### 2.2.3 Takım Üyeleri Yönetimi

1. Bir takım seçin ve **Üyeler** butonuna tıklayın.
2. **Üye Ekle** sekmesine geçin.
3. Eklemek istediğiniz kullanıcıyı seçin.
4. **"+"** butonuna tıklayarak üye ekleyin.

![Takım Üyeleri](/assets/images/UserGuideEng/18_teams_members_form.png)
*(Resim 18: Takım üyeleri yönetimi)*

### 2.2.4 Takım Takibi

1. Takip etmek istediğiniz takımı seçin.
2. **Takip** butonuna tıklayın.
3. Aktivite geçmişini görüntüleyin ve **Dışa Aktar** ile rapor alın.

![Takım Takibi](/assets/images/UserGuideEng/19_teams_trace.png)
*(Resim 19: Takım aktivite takibi)*

### 2.2.5 Takım Silme

1. Silmek istediğiniz takımı seçin.
2. **Sil** butonuna tıklayın.
3. Onay penceresinde **Evet** butonuna tıklayın.

![Takım Silme](/assets/images/UserGuideEng/20_teams_delete.png)
*(Resim 20: Takım silme onayı)*

> **Dikkat**: Takım silindiğinde, takıma atanmış kullanıcılar bu takımın kaynaklarına erişemez hale gelir.

---

## 2.3 Organizasyon - Erişim Kontrolü

Erişim kontrolü, izin grupları oluşturarak kullanıcı yetkilerini merkezi olarak yönetmenizi sağlar.

### 2.3.1 İzin Grubu Oluşturma

1. **Organizasyon** > **Erişim Kontrolü** sekmesine gidin.
2. Sağ üst köşedeki **"+"** simgesine tıklayın.
3. Grup adını girin ve **Tamam** butonuna tıklayın.

![İzin Grubu Oluşturma](/assets/images/UserGuideEng/21_create_access.png)
*(Resim 21: İzin grubu oluşturma)*

### 2.3.2 İzin Yönetimi

1. Bir izin grubu seçin.
2. **İzinler** butonuna tıklayın.
3. Gruba atanmış izinleri görüntüleyin.
4. İzin eklemek veya kaldırmak için ilgili butonları kullanın.

![İzin Yönetimi](/assets/images/UserGuideEng/22_access_permission.png)
*(Resim 22: İzin yönetimi ekranı)*

---

## 2.4 Makineler

Makineler bölümü, sunucularınızı ve depo kaynaklarınızı yönetmenizi sağlar.

### 2.4.1 Makine Ekleme

1. Sol menüden **Makineler** sekmesine gidin.
2. Sağ üst köşedeki **Makine Ekle** butonuna tıklayın.

![Makine Ekleme](/assets/images/UserGuideEng/23_machines_add.png)
*(Resim 23: Makine ekleme butonu)*

3. Açılan formu doldurun:
   - **Makine Adı**: Tanımlayıcı bir isim
   - **IP Adresi**: Sunucunun IP adresi
   - **Kullanıcı Adı**: SSH kullanıcı adı
   - **Bağlantı Türü**: Parola veya SSH anahtarı

![Makine Formu](/assets/images/UserGuideEng/24_machine_create.png)
*(Resim 24: Makine oluşturma formu)*

4. **Bağlantıyı Test Et** butonuna tıklayarak bağlantıyı doğrulayın.
5. Başarılı bağlantı sonrası **Oluştur** butonuna tıklayın.

![Makine Ekleme Tamamlandı](/assets/images/UserGuideEng/25_machine_create_complete.png)
*(Resim 25: Makine ekleme tamamlandı)*

6. **Kapat** butonuna tıklayarak işlemi sonlandırın.

### 2.4.2 Bağlantı Testi

Mevcut makinelerin bağlantı durumunu kontrol edebilirsiniz.

1. **Bağlantı Testi** butonuna tıklayın.

![Bağlantı Testi Butonu](/assets/images/UserGuideEng/26_connectivity_test_button.png)
*(Resim 26: Bağlantı testi butonu)*

2. Test etmek istediğiniz makineyi seçin.
3. **Test Et** butonuna tıklayın.

![Bağlantı Testi Formu](/assets/images/UserGuideEng/27_connectivity_test_form.png)
*(Resim 27: Bağlantı testi formu)*

### 2.4.3 Makine Listesini Yenileme

Makine listesini güncellemek için **Yenile** butonuna tıklayın.

![Yenile Butonu](/assets/images/UserGuideEng/28_refresh.png)
*(Resim 28: Liste yenileme butonu)*

### 2.4.4 Makine Detayları

1. Detaylarını görmek istediğiniz makineyi seçin.
2. **Detayları Görüntüle** butonuna tıklayın.

![Detay Butonu](/assets/images/UserGuideEng/29_view_details_button.png)
*(Resim 29: Detay görüntüleme butonu)*

3. Açılan sayfada makine bilgilerini inceleyin.

![Makine Detayları](/assets/images/UserGuideEng/30_machine_view_details.png)
*(Resim 30: Makine detay sayfası)*

### 2.4.5 Makine Düzenleme

1. Düzenlemek istediğiniz makineyi seçin.
2. **Düzenle** butonuna tıklayın.

![Düzenle Butonu](/assets/images/UserGuideEng/31_edit_button.png)
*(Resim 31: Düzenleme butonu)*

3. Gerekli değişiklikleri yapın ve **Kaydet** butonuna tıklayın.

![Düzenleme Formu](/assets/images/UserGuideEng/32_edit_form.png)
*(Resim 32: Makine düzenleme formu)*

### 2.4.6 Makine Takibi

Makine üzerinde yapılan işlemlerin geçmişini görmek için:

1. Makineyi seçin ve **Takip** butonuna tıklayın.

![Takip Butonu](/assets/images/UserGuideEng/33_trace_button.png)
*(Resim 33: Takip butonu)*

2. İşlem geçmişini inceleyin.

![Takip Listesi](/assets/images/UserGuideEng/34_trace_list.png)
*(Resim 34: İşlem geçmişi listesi)*

### 2.4.7 Makine Silme

1. Silmek istediğiniz makineyi seçin.
2. **Sil** butonuna tıklayın.

![Sil Butonu](/assets/images/UserGuideEng/35_delete_button.png)
*(Resim 35: Silme butonu)*

3. Onay penceresinde **Sil** butonuna tıklayın.

![Silme Onayı](/assets/images/UserGuideEng/36_delete_form.png)
*(Resim 36: Silme onay penceresi)*

> **Dikkat**: Makine silindiğinde, üzerindeki tüm depo tanımlamaları da kaldırılır.

### 2.4.8 Uzaktan İşlemler

Makineler üzerinde uzaktan çeşitli işlemler gerçekleştirebilirsiniz.

#### Kurulum (Setup)

1. Makineyi seçin ve **Uzak** butonuna tıklayın.
2. **Sunucuda Çalıştır** > **Kurulum** seçeneklerini izleyin.

![Uzak Kurulum](/assets/images/UserGuideEng/37_remote_button.png)
*(Resim 37: Uzak işlemler menüsü)*

3. **Kurulum** butonuna tıklayın.
4. **Tamamlandı** mesajını gördüğünüzde işlem bitmiştir.

![Kurulum Tamamlandı](/assets/images/UserGuideEng/38_server_setup.png)
*(Resim 38: Kurulum tamamlandı)*

#### Bağlantı Kontrolü (Hello)

1. Makineyi seçin, **Uzak** > **Sunucuda Çalıştır** > **Merhaba** yolunu izleyin.

![Merhaba Komutu](/assets/images/UserGuideEng/39_remote_hello.png)
*(Resim 39: Bağlantı kontrolü)*

2. **Tamamlandı** mesajı bağlantının başarılı olduğunu gösterir.

![Bağlantı Başarılı](/assets/images/UserGuideEng/40_remote_hello_complete.png)
*(Resim 40: Bağlantı kontrolü tamamlandı)*

#### Gelişmiş İşlemler

1. **Uzak** > **Sunucuda Çalıştır** > **Gelişmiş** yolunu izleyin.
2. **Makine Fonksiyonları** listesinden istediğiniz işlemi seçin.
3. **Kuyruğa Ekle** butonuna tıklayın.

![Gelişmiş İşlemler](/assets/images/UserGuideEng/41_remote_advanced.png)
*(Resim 41: Gelişmiş işlemler menüsü)*

#### Bağlantı Testi

Tek bir makine için hızlı bağlantı testi:

![Bağlantı Testi](/assets/images/UserGuideEng/42_connectivity_test.png)
*(Resim 42: Tek makine bağlantı testi)*

---

## 2.5 Depo Oluşturma ve İşlemleri

Depolar, yedekleme verilerinizin saklandığı temel birimlerdir.

### 2.5.1 Depo Oluşturma

1. **Makineler** sekmesinden bir makine seçin.
2. **"+" Depo Oluştur** butonuna tıklayın.

![Depo Oluşturma](/assets/images/UserGuideEng/43_create_repo_add.png)
*(Resim 43: Depo oluşturma butonu)*

3. Formu doldurun:
   - **Depo Adı**: Tanımlayıcı bir isim
   - **Şablon**: Uygun bir şablon seçin (önemli!)
   - **Boyut**: Depo boyutunu belirleyin

![Depo Formu](/assets/images/UserGuideEng/44_repo_form.png)
*(Resim 44: Depo oluşturma formu)*

4. **Oluştur** butonuna tıklayın.

![Depo Tamamlandı](/assets/images/UserGuideEng/45_repo_complete.png)
*(Resim 45: Depo oluşturma tamamlandı)*

5. **Kapat** butonuna tıklayın.

![Depo Listesi](/assets/images/UserGuideEng/46_repo_list.png)
*(Resim 46: Güncellenmiş depo listesi)*

### 2.5.2 Depo Fork İşlemi

Mevcut bir depoyu kopyalayarak yeni bir depo oluşturabilirsiniz.

1. Kopyalamak istediğiniz depoyu seçin.
2. **fx** butonuna tıklayın.

![Fork Butonu](/assets/images/UserGuideEng/47_fork_button.png)
*(Resim 47: Fonksiyon menüsü)*

3. **Fork** seçeneğini tıklayın.
4. **Kuyruğa Ekle** butonuna tıklayın.

![Fork Formu](/assets/images/UserGuideEng/48_fork_form.png)
*(Resim 48: Fork formu)*

5. **Tamamlandı** mesajını bekleyin ve **Kapat** butonuna tıklayın.

![Fork Tamamlandı](/assets/images/UserGuideEng/49_repo_completed.png)
*(Resim 49: Fork işlemi tamamlandı)*

### 2.5.3 Depo Başlatma (Up)

Depoyu aktif hale getirmek için:

1. Depoyu seçin ve **fx** > **Başlat** yolunu izleyin.

![Başlatma](/assets/images/UserGuideEng/50_repo_up.png)
*(Resim 50: Depo başlatma)*

2. **Tamamlandı** mesajını bekleyin.

![Başlatma Tamamlandı](/assets/images/UserGuideEng/51_repo_up_complete.png)
*(Resim 51: Depo başlatıldı)*

### 2.5.4 Depo Durdurma (Down)

Aktif bir depoyu durdurmak için:

1. Depoyu seçin ve **fx** > **Durdur** yolunu izleyin.

![Durdurma](/assets/images/UserGuideEng/52_down_button.png)
*(Resim 52: Depo durdurma)*

2. **Tamamlandı** mesajını bekleyin.

![Durdurma Tamamlandı](/assets/images/UserGuideEng/53_down_completed.png)
*(Resim 53: Depo durduruldu)*

### 2.5.5 Dağıtım (Deploy)

Depoyu farklı bir konuma dağıtmak için:

1. Depoyu seçin ve **fx** > **Dağıt** yolunu izleyin.

![Dağıtım](/assets/images/UserGuideEng/54_deploy_button.png)
*(Resim 54: Dağıtım butonu)*

2. Hedef bilgilerini girin.
3. **Kuyruğa Ekle** butonuna tıklayın.

![Dağıtım Formu](/assets/images/UserGuideEng/55_deploy_form.png)
*(Resim 55: Dağıtım formu)*

4. **Tamamlandı** mesajını bekleyin.

![Dağıtım Tamamlandı](/assets/images/UserGuideEng/56_deploy_completed.png)
*(Resim 56: Dağıtım tamamlandı)*

### 2.5.6 Yedekleme (Backup)

Depoyu yedeklemek için:

1. Depoyu seçin ve **fx** > **Yedekle** yolunu izleyin.

![Yedekleme](/assets/images/UserGuideEng/57_backup_button.png)
*(Resim 57: Yedekleme butonu)*

2. Yedekleme ayarlarını yapın.
3. **Kuyruğa Ekle** butonuna tıklayın.

![Yedekleme Formu](/assets/images/UserGuideEng/58_backup_form.png)
*(Resim 58: Yedekleme formu)*

4. **Tamamlandı** mesajını bekleyin.

![Yedekleme Tamamlandı](/assets/images/UserGuideEng/59_backup_completed.png)
*(Resim 59: Yedekleme tamamlandı)*

### 2.5.7 Şablon Uygulama

Depoya yeni bir şablon uygulamak için:

1. Depoyu seçin ve **fx** > **Şablonlar** yolunu izleyin.

![Şablonlar](/assets/images/UserGuideEng/60_templates_button.png)
*(Resim 60: Şablonlar butonu)*

2. Uygulamak istediğiniz şablonu seçin.
3. **Kuyruğa Ekle** butonuna tıklayın.

![Şablon Formu](/assets/images/UserGuideEng/61_templates_form.png)
*(Resim 61: Şablon seçim formu)*

4. **Tamamlandı** mesajını bekleyin.

![Şablon Tamamlandı](/assets/images/UserGuideEng/62_templates_completed.png)
*(Resim 62: Şablon uygulandı)*

### 2.5.8 Bağlantıyı Kesme (Unmount)

Depo bağlantısını kesmek için:

1. Depoyu seçin ve **fx** > **Gelişmiş** > **Bağlantıyı Kes** yolunu izleyin.

![Bağlantı Kesme](/assets/images/UserGuideEng/63_unmount_button.png)
*(Resim 63: Bağlantı kesme butonu)*

2. **Tamamlandı** mesajını bekleyin.

![Bağlantı Kesme Tamamlandı](/assets/images/UserGuideEng/64_unmount_completed.png)
*(Resim 64: Bağlantı kesildi)*

### 2.5.9 Genişletme (Expand)

Depo boyutunu artırmak için:

1. Depoyu seçin ve **fx** > **Gelişmiş** > **Genişlet** yolunu izleyin.

![Genişletme](/assets/images/UserGuideEng/65_expand_button.png)
*(Resim 65: Genişletme butonu)*

2. Yeni boyutu girin.
3. **Kuyruğa Ekle** butonuna tıklayın.

![Genişletme Formu](/assets/images/UserGuideEng/66_expand_form.png)
*(Resim 66: Genişletme formu)*

4. **Tamamlandı** mesajını bekleyin.

![Genişletme Tamamlandı](/assets/images/UserGuideEng/67_expand_completed.png)
*(Resim 67: Genişletme tamamlandı)*

### 2.5.10 Yeniden Adlandırma

Depo adını değiştirmek için:

1. Depoyu seçin ve **fx** > **Yeniden Adlandır** yolunu izleyin.

![Yeniden Adlandırma](/assets/images/UserGuideEng/68_rename_button.png)
*(Resim 68: Yeniden adlandırma butonu)*

2. Yeni adı girin.
3. **Kaydet** butonuna tıklayın.

![Yeniden Adlandırma Formu](/assets/images/UserGuideEng/69_rename_form.png)
*(Resim 69: Yeniden adlandırma formu)*

### 2.5.11 Depo Silme

Depoyu kalıcı olarak silmek için:

1. Depoyu seçin ve **fx** > **Depoyu Sil** yolunu izleyin.

![Depo Silme](/assets/images/UserGuideEng/70_delete_repo_button.png)
*(Resim 70: Depo silme butonu)*

2. Onay penceresinde **Sil** butonuna tıklayın.

> **Dikkat**: Bu işlem geri alınamaz! Silinen depo ve içindeki tüm veriler kalıcı olarak kaybolur.

### 2.5.12 Depo Detayları

Depo hakkında ayrıntılı bilgi almak için:

1. Depoyu seçin.
2. **Detayları Görüntüle** butonuna tıklayın.

![Detay Butonu](/assets/images/UserGuideEng/71_repo_view_button.png)
*(Resim 71: Detay görüntüleme butonu)*

3. Depo bilgilerini inceleyin.

![Depo Detayları](/assets/images/UserGuideEng/72_repo_details_view.png)
*(Resim 72: Depo detay sayfası)*

---

## 2.6 Depo Bağlantı İşlemleri

Depolara farklı yöntemlerle bağlanabilirsiniz.

### 2.6.1 Masaüstü Uygulaması ile Bağlantı

1. **Yerel** butonuna tıklayın.

![Yerel Bağlantı](/assets/images/UserGuideEng/73_repo_connection_local.png)
*(Resim 73: Yerel bağlantı butonu)*

2. **Masaüstü Uygulaması** seçeneğini tıklayın.

![Bağlantı Seçenekleri](/assets/images/UserGuideEng/74_repo_connection.png)
*(Resim 74: Bağlantı seçenekleri)*

3. **Aç** butonuna tıklayarak masaüstü uygulamasını başlatın.

![Uygulama Açma](/assets/images/UserGuideEng/75_desktop_open_page.png)
*(Resim 75: Masaüstü uygulaması açma)*

---

## 2.7 Ayarlar

Ayarlar bölümünden profil ve sistem ayarlarınızı yönetebilirsiniz.

### 2.7.1 Parola Değiştirme

1. Sol menüden **Ayarlar** > **Profil** sekmesine gidin.

![Profil Ayarları](/assets/images/UserGuideEng/76_profiles_button.png)
*(Resim 76: Profil ayarları)*

2. **Parola Değiştir** butonuna tıklayın.

![Parola Değiştir Butonu](/assets/images/UserGuideEng/77_profiles_change_button.png)
*(Resim 77: Parola değiştirme butonu)*

3. Yeni parolanızı girin ve **Parola Değiştir** butonuna tıklayın.

![Parola Formu](/assets/images/UserGuideEng/78_profiles_change_form.png)
*(Resim 78: Parola değiştirme formu)*

> **İpucu**: Güçlü bir parola için en az 8 karakter, büyük/küçük harf, rakam ve özel karakter kullanın.

---

## 2.8 Depolama

Depolama bölümü, yedekleme verilerinizin saklanacağı fiziksel alanları yönetmenizi sağlar.

### 2.8.1 Depolama Ekleme

1. Sol menüden **Depolama** sekmesine gidin.
2. **Depolama Ekle** butonuna tıklayın.

![Depolama Ekleme](/assets/images/UserGuideEng/79_storage_add_button.png)
*(Resim 79: Depolama ekleme butonu)*

3. Formu doldurun:
   - **Ad**: Tanımlayıcı bir isim
   - **Tür**: Depolama türü
   - **Yol**: Depolama konumu

![Depolama Formu](/assets/images/UserGuideEng/80_storage_form.png)
*(Resim 80: Depolama oluşturma formu)*

4. **Oluştur** butonuna tıklayın.

---

## 2.9 Kimlik Bilgileri

Kimlik bilgileri bölümü, depolarınızın erişim bilgilerini güvenli şekilde yönetmenizi sağlar.

### 2.9.1 Kimlik Bilgisi Düzenleme

1. Sol menüden **Kimlik Bilgileri** sekmesine gidin.
2. Düzenlemek istediğiniz kaydı seçin.
3. **Düzenle** butonuna tıklayın.

![Kimlik Bilgileri](/assets/images/UserGuideEng/81_credentials.png)
*(Resim 81: Kimlik bilgileri listesi)*

4. Değişiklikleri yapın ve **Kaydet** butonuna tıklayın.

![Kimlik Bilgisi Formu](/assets/images/UserGuideEng/82_credentials_form.png)
*(Resim 82: Kimlik bilgisi düzenleme formu)*

### 2.9.2 Kimlik Bilgisi Takibi

1. Takip etmek istediğiniz kaydı seçin.
2. **Takip** butonuna tıklayın.

![Takip Butonu](/assets/images/UserGuideEng/83_credentials_trace_button.png)
*(Resim 83: Kimlik bilgisi takip butonu)*

3. Denetim geçmişini inceleyin.
4. **Dışa Aktar** butonundan rapor alın.

![Takip Listesi](/assets/images/UserGuideEng/84_credentials_list_export.png)
*(Resim 84: Kimlik bilgisi denetim geçmişi)*

### 2.9.3 Kimlik Bilgisi Silme

1. Silmek istediğiniz kaydı seçin.
2. **Sil** butonuna tıklayın.

![Silme Butonu](/assets/images/UserGuideEng/85_credentials_delete.png)
*(Resim 85: Kimlik bilgisi silme butonu)*

3. Onay penceresinde **Sil** butonuna tıklayın.

![Silme Onayı](/assets/images/UserGuideEng/86_credentials_delete_confirm.png)
*(Resim 86: Silme onay penceresi)*

---

## 2.10 Kuyruk

Kuyruk bölümü, sistemde bekleyen ve tamamlanan işlemleri takip etmenizi sağlar.

### 2.10.1 Kuyruk İşlemleri

1. Sol menüden **Kuyruk** sekmesine tıklayın.

![Kuyruk](/assets/images/UserGuideEng/87_queue_button.png)
*(Resim 87: Kuyruk listesi)*

2. İşlem durumlarını inceleyin:
   - **Bekliyor**: İşlem sırada
   - **İşleniyor**: İşlem devam ediyor
   - **Tamamlandı**: İşlem başarılı
   - **Başarısız**: İşlem hatalı

3. Rapor almak için **Dışa Aktar** butonuna tıklayın ve format seçin.

![Kuyruk Dışa Aktarımı](/assets/images/UserGuideEng/88_queue_export.png)
*(Resim 88: Kuyruk dışa aktarımı)*

---

## 2.11 Denetim

Denetim bölümü, sistemde yapılan tüm işlemlerin kayıtlarını tutar.

### 2.11.1 Denetim Kayıtları

1. Sol menüden **Denetim** sekmesine tıklayın.

![Denetim Listesi](/assets/images/UserGuideEng/89_audit_list.png)
*(Resim 89: Denetim kayıtları listesi)*

2. Kayıtları inceleyin:
   - Kim tarafından yapıldı
   - Ne zaman yapıldı
   - Hangi işlem yapıldı
   - İşlem sonucu

3. Rapor almak için **Dışa Aktar** butonuna tıklayın.

![Denetim Dışa Aktarımı](/assets/images/UserGuideEng/90_audit_export.png)
*(Resim 90: Denetim kayıtları dışa aktarımı)*

---

**© 2025 Rediacc Platformu – Tüm Hakları Saklıdır.**
