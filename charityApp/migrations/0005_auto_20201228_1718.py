# Generated by Django 3.1.4 on 2020-12-28 14:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('charityApp', '0004_auto_20201228_1657'),
    ]

    operations = [
        migrations.RenameField(
            model_name='news',
            old_name='charity_id',
            new_name='charity',
        ),
    ]
