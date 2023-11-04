from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from core.views import CustomTokenObtainPairView, CustomUserCreateView, ViagemViewSet, DiarioViewSet

router = routers.DefaultRouter()
router.register('viagens', ViagemViewSet, basename='Viagens')
router.register('posts', DiarioViewSet, basename='Posts')

urlpatterns = [
    path('api/register/', CustomUserCreateView.as_view(), name='register'),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]

