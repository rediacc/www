---
title: Rediacc'a Başlarken
description: Bu kapsamlı kılavuzla Rediacc'ı nasıl kurup birkaç dakika içinde kullanmaya başlayacağınızı öğrenin.
author: Rediacc Team
publishedDate: 2024-01-15
category: guide
tags: [getting-started, setup, tutorial]
featured: true
language: tr
---

Rediacc, birden fazla makinedeki görevleri yönetmeyi ve yürütmeyi kolaylaştıran güçlü bir dağıtılmış görev yürütme sistemidir. Bu kılavuz, çalışmaya başlamanıza yardımcı olacak temel bilgiler konusunda size yol gösterecektir.

## Kurulum

### Önkoşullar 
- Linux veya macOS (MSYS2 aracılığıyla Windows desteği) 
- Python 3.8 veya üzeri 
- Hedef makinelerinize SSH erişimi

### Hızlı Kurulum

```bash
# Clone the repository
git clone https://github.com/rediacc/rediacc.git
cd rediacc

# Run the installation script
./install.sh --auto

# Verify installation
./rediacc --version
```

## İlk Göreviniz

### 1. Kimlik doğrulama

```bash
./rediacc login
```

Bu, kimlik bilgilerinizi girmenizi ve kimlik doğrulama belirtecinizi ayarlamanızı isteyecektir.

### 2. Mevcut Makineleri Listele

```bash
./rediacc list machines --team Default
```

Bu, varsayılan ekibinizdeki görev yürütmeye uygun tüm makineleri gösterir.

### 3. Basit Bir Görev Oluşturun

```bash
./rediacc create task --machine server-01 --command "echo 'Hello Rediacc!'"
```

### 4. İlerlemeyi İzleyin

Görevlerinizi gerçek zamanlı olarak izlemek için "https://www.rediacc.com" adresindeki web konsolunu kullanın.

## Temel Kavramlar

### Kuyruk Sistemi 
Görevler önceliğe dayalı bir kuyruk sistemi aracılığıyla yönetilir. Görevlere 1'den (en yüksek) 5'e (en düşük) kadar öncelikler atanabilir.

### Kasa Sistemi 
SSH kimlik bilgileri ve API anahtarları gibi hassas veriler, şifrelenmiş kasalarda güvenli bir şekilde saklanır.

### Takımlar 
Daha iyi erişim kontrolü ve izolasyon için makinelerinizi ve kaynaklarınızı ekiplere göre düzenleyin.

## Sonraki Adımlar

- [Dosya senkronizasyonu hakkında bilgi edinin](/docs/file-sync) 
- [CLI referansını keşfedin](/docs/cli-reference) 
- [Gelişmiş örneklere göz atın](/blog/advanced-task-workflows)

Mutlu görev yürütme!