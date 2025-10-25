---
title: CLI Referansı
description: Tüm Rediacc CLI komutları ve seçenekleri için eksiksiz referans.
category: Reference
order: 1
language: tr
---

## Kurulum

### Önkoşullar

- Python 3.8+ 
- SSH istemcisi 
- Git (geliştirme kurulumları için isteğe bağlı)

### Kaynaktan Yükle

```bash
./install.sh --auto
```

### Kurulumu Doğrulayın

```bash
./rediacc --version
./rediacc --help
```

## Küresel Seçenekler

Tüm komutlar şu seçenekleri destekler:

- `--help` - Komut yardımını göster 
- `--output json` - JSON formatında çıktı (komut dosyası oluşturmak için kullanışlıdır) 
- `--dev` - Geliştirme modu (rahat SSL doğrulaması) 
- `--verbose` - Ayrıntılı günlüğe kaydetmeyi etkinleştir

## Kimlik Doğrulama Komutları

### Giriş yapmak

```bash
./rediacc login
```

Etkileşimli giriş. Belirteci '~/.rediacc/config.json'da saklar.

### Oturumu kapat

```bash
./rediacc logout
```

Saklanan kimlik doğrulama belirtecini kaldırır.

### Mevcut Kullanıcıyı Göster

```bash
./rediacc whoami
```

## Ekip Yönetimi

### Takımları Listele

```bash
./rediacc list teams
./rediacc list teams --output json
```

### Ekip Oluştur

```bash
./rediacc create team --name "Production"
```

### Takım Detaylarını Göster

```bash
./rediacc inspect team Production
```

## Makine Yönetimi

### Makineleri Listele

```bash
./rediacc list machines
./rediacc list machines --team Production
./rediacc list machines --team Production --output json
```

### Makine Oluştur

```bash
./rediacc create machine \
  --name prod-01 \
  --team Production \
  --ip 10.0.0.5 \
  --user deploy
```

### Makineyi İnceleyin

```bash
./rediacc inspect machine prod-01
./rediacc inspect machine prod-01 --team Production
```

### Makineyi Sil

```bash
./rediacc delete machine prod-01 --team Production --confirm
```

## Kuyruk Yönetimi

### Sıra Öğelerini Listele

```bash
./rediacc list queue --team Production
./rediacc list queue --status PENDING
./rediacc list queue --output json
```

### Sıra Öğesi Ayrıntılarını Al

```bash
./rediacc inspect queue item-123
```

### Sıra Öğesini İptal Et

```bash
./rediacc cancel queue item-123 --confirm
```

## Dosya Senkronizasyonu

### Dosyaları Yükle

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repo webapp
```

### Dosyaları İndir

```bash
./rediacc sync download \
  --machine prod-01 \
  --repo webapp \
  --local ./backup
```

### Ayna Senkronizasyonu (İki yönlü)

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repo webapp \
  --mirror \
  --confirm
```

### Dosyaları Doğrulayın

```bash
./rediacc sync download \
  --machine prod-01 \
  --repo webapp \
  --local ./backup \
  --verify
```

## Terminal Erişimi

### Etkileşimli SSH

```bash
./rediacc term --machine prod-01
```

### Komutu Yürüt

```bash
./rediacc term \
  --machine prod-01 \
  --command "docker ps"
```

### Depoya Bağlan

```bash
./rediacc term \
  --machine prod-01 \
  --repo webapp
```

## Yapılandırma Dosyaları

### ~/.rediacc/config.json

Kimlik doğrulama belirteçlerini ve kullanıcı tercihlerini saklar:

```json
{
  "tokens": {
    "default": "your-api-token",
    "production": "prod-token"
  },
  "preferences": {
    "output": "json",
    "verbose": false
  }
}
```

## Çıkış Kodları

- `0` - Başarılı 
- `1` - Genel hata 
- `2` - Komut bulunamadı 
- `3` - Kimlik doğrulama başarısız oldu 
- `4` - İzin reddedildi 
- `5` - Kaynak bulunamadı

## Platforma Özel Notlar

### Windows

`./rediacc` yerine `rediacc.bat` kullanın veya PATH'e ekleyin.

### macOS

Sistem Bütünlüğü Koruması (SIP) uyumlu SSH kurulumu gerektirir.

### Linux

Tüm ana dağıtımlarda tam olarak desteklenir.

## Yardım ve Destek

Herhangi bir komutla ilgili ek yardım için:

```bash
./rediacc COMMAND --help
```

[Belgelerimizi](/docs) veya [destekle iletişime geçin](https://www.rediacc.com/contact) sayfamızı ziyaret edin.