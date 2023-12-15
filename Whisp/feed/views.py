from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Post
from rest_framework import status
from .serializers import PostSerializer,PostSerializerHomepage
from rest_framework.permissions import IsAuthenticated

class PostListAPIView(APIView):
    def get(self, request, format=None):
        posts = Post.objects.all().order_by('-id')[:60]
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    


class PostCreateAPIView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request, format=None):
        serializer = PostSerializerHomepage(data=request.data)

        if serializer.is_valid():
           
            post_data = serializer.validated_data

            
            post = Post(
                text=post_data.get('text'),
                image=post_data.get('image'),
                video=post_data.get('video'),
                author=request.user  
            )
            post.save()

            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
      
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
