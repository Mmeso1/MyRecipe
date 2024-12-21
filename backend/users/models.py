from django.db import models
from django.contrib.auth.models import AbstractUser
from cloudinary.models import CloudinaryField

class CustomUser(AbstractUser):
    name = models.CharField(blank=True, max_length=255)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)
    profile_image = CloudinaryField('profile_image', folder='recipe_pfp/', null=True, blank=True, default='https://images.pexels.com/photos/757240/pexels-photo-757240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email