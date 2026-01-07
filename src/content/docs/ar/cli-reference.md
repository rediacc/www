---
title: مرجع سطر الأوامر
description: مرجع كامل لجميع أوامر وخيارات Rediacc CLI.
category: Reference
order: 1
language: ar
---

## تثبيت

### المتطلبات الأساسية

- بايثون 3.8+ 
- عميل SSH 
- Git (اختياري، لعمليات التثبيت التطويرية)

### التثبيت من المصدر

```bash
./install.sh --auto
```

### التحقق من التثبيت

```bash
./rediacc --version
./rediacc --help
```

## الخيارات العالمية

تدعم كافة الأوامر هذه الخيارات:

- `--مساعدة` - إظهار مساعدة الأمر 
- `--output json` - الإخراج بتنسيق JSON (مفيد للبرمجة النصية) 
- `--dev` - وضع التطوير (التحقق المريح من SSL) 
- `--verbose` - تمكين التسجيل المطول

## أوامر المصادقة

### تسجيل الدخول

```bash
./rediacc login
```

تسجيل الدخول التفاعلي. يخزن الرمز المميز في `~/.rediacc/config.json`.

### تسجيل الخروج

```bash
./rediacc logout
```

يزيل رمز المصادقة المخزن.

### إظهار المستخدم الحالي

```bash
./rediacc whoami
```

## إدارة الفريق

### قائمة الفرق

```bash
./rediacc list teams
./rediacc list teams --output json
```

### إنشاء فريق

```bash
./rediacc create team --name "Production"
```

### عرض تفاصيل الفريق

```bash
./rediacc inspect team Production
```

## إدارة الآلة

### آلات القائمة

```bash
./rediacc list machines
./rediacc list machines --team Production
./rediacc list machines --team Production --output json
```

### إنشاء آلة

```bash
./rediacc create machine \
  --name prod-01 \
  --team Production \
  --ip 10.0.0.5 \
  --user deploy
```

### فحص الآلة

```bash
./rediacc inspect machine prod-01
./rediacc inspect machine prod-01 --team Production
```

### حذف الجهاز

```bash
./rediacc delete machine prod-01 --team Production --confirm
```

## إدارة قائمة الانتظار

### قائمة عناصر قائمة الانتظار

```bash
./rediacc list queue --team Production
./rediacc list queue --status PENDING
./rediacc list queue --output json
```

### الحصول على تفاصيل عنصر قائمة الانتظار

```bash
./rediacc inspect queue item-123
```

### إلغاء عنصر قائمة الانتظار

```bash
./rediacc cancel queue item-123 --confirm
```

## مزامنة الملفات

### تحميل الملفات

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repository webapp
```

### تنزيل الملفات

```bash
./rediacc sync download \
  --machine prod-01 \
  --repository webapp \
  --local ./backup
```

### مزامنة المرآة (ثنائية الاتجاه)

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repository webapp \
  --mirror \
  --confirm
```

### التحقق من الملفات

```bash
./rediacc sync download \
  --machine prod-01 \
  --repository webapp \
  --local ./backup \
  --verify
```

## الوصول إلى المحطة الطرفية

### SSH التفاعلي

```bash
./rediacc term --machine prod-01
```

### تنفيذ الأمر

```bash
./rediacc term \
  --machine prod-01 \
  --command "docker ps"
```

### الاتصال بالمستودع

```bash
./rediacc term \
  --machine prod-01 \
  --repository webapp
```

## ملفات التكوين

### ~/.rediacc/config.json

يخزن رموز المصادقة وتفضيلات المستخدم:

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

## رموز الخروج

- `0` - نجاح 
- `1` - خطأ عام 
- `2` - لم يتم العثور على الأمر 
- `3` - فشلت المصادقة 
- `4` - تم رفض الإذن 
- `5` - لم يتم العثور على المورد

## ملاحظات خاصة بالمنصة

### ويندوز

استخدم "rediacc.bat" بدلاً من "./rediacc" أو أضفه إلى PATH.

### ماك

يتطلب إعداد SSH متوافقًا مع حماية تكامل النظام (SIP).

### لينكس

مدعوم بالكامل على جميع التوزيعات الرئيسية.

## المساعدة والدعم

للحصول على مساعدة إضافية بشأن أي أمر:

```bash
./rediacc COMMAND --help
```

تفضل بزيارة [الوثائق](/docs) أو [اتصل بالدعم](https://www.rediacc.com/contact).