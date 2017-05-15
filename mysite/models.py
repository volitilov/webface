from django.db import models
from django.utils import timezone
from django.conf import settings


class Post(models.Model):
	class Meta():
		verbose_name = 'Пост'
		verbose_name_plural = 'Посты'

	author = models.ForeignKey('auth.User')
	title = models.CharField(max_length=200)
	text = models.TextField()
	created_date = models.DateTimeField(default=timezone.now)
	published_date = models.DateTimeField(blank=True, null=True)
	post_likes = models.IntegerField(default=0)

	def publish(self):
		self.published_date = timezone.now()
		self.save()

	def __str__(self):
		return self.title


class Mesage(models.Model):
	class Meta():
		verbose_name = 'Сообщение'
		verbose_name_plural = 'Сообщения'

	name = models.CharField(max_length=20)
	email = models.EmailField()
	website = models.URLField()
	text = models.TextField()

	def __str__(self):
		return self.name


class PortfolioItem(models.Model):
	class Meta():
		verbose_name = 'Work'
		verbose_name_plural = 'Works'

	title = models.CharField(max_length=200)
	description = models.TextField()
	img_small = models.ImageField(upload_to='portfolio/%d')
	img_big = models.ImageField(upload_to='portfolio/%d')
	src = models.FileField(upload_to='portfolio/%d')

	created_date = models.DateTimeField(default=timezone.now)
	published_date = models.DateTimeField(blank=True, null=True)
	likes = models.IntegerField(default=0)

	def __str__(self):
		return self.title

