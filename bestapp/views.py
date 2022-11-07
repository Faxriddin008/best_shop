from django.shortcuts import render
from  django.views.generic import ListView, DetailView
from .models import Products
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
# Create your views here.

class BlogListView(ListView):
    model = Products
    template_name = 'best.html'


class BlogDetailView(DetailView):
    model = Products
    template_name = '.html'


class BlogCreatView(CreateView):
    model = Products
    template_name = 'post_new.html'
    fields = ['title','author','body']

class BlogUpdateView(UpdateView):
    model = Products
    template_name = 'post_edit.html'
    fields = ['title', 'body']

class BlogDeleteView(DeleteView):
    model = Products
    template_name = 'post_delete.html'
    success_url = reverse_lazy('home')
# Create your views here.
