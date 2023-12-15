from rest_framework import serializers
from .models import Post, Comment

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'text', 'image', 'video', 'author', 'date'] 

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id','author','post','body','date']
        
        

class PostSerializerHomepage(serializers.Serializer):
    text = serializers.CharField()
    image = serializers.ImageField(required=False)
    video = serializers.FileField(required=False)
