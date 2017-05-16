from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from .models import Post, Mesage, PortfolioItem


def indexView(request):
	data = {
		'works': PortfolioItem.objects.all(),
		'count': range(PortfolioItem.objects.count())  
	}
	
	return render(request, 'pages/index.html', data)



def post(request, index):
	try:
		post = Post.objects.get(id=index)
		result = post.text
	except Post.DoesNotExist:
		result = 'Does Not Exist'

	return HttpResponse(result)



def work(request, pk):
	data = {
		'work': get_object_or_404(PortfolioItem, pk=pk),
		'works':  PortfolioItem.objects.all()
	}
	return render(request, 'pages/work.html', data)



def contacts(request):
	data = {
		'name': request.POST['user_name'],
		'email': request.POST['user_email'],
		'site': request.POST['user_site'] or 'none',
		'msg': request.POST['user_msg'], 
	}

	msg = Mesage(	name=data['name'], email=data['email'], 
					website=data['site'], text=data['msg'])
	msg.save()

	return render(request, 'pages/feedback.html', { 'name': data['name'] })