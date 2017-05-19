from django.shortcuts import redirect, render, get_object_or_404
from django.core.exceptions import ObjectDoesNotExist 
from django.http import HttpResponse, HttpResponseRedirect
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Mesage, PortfolioItem
import zipfile, shutil


def home(request):
	data = {
		'works': PortfolioItem.objects.all(),
		'count': range(PortfolioItem.objects.count())
	}
	
	return render(request, 'pages/index.html', data)



def works(request):
	work_list = PortfolioItem.objects.all()
	paginator = Paginator(work_list, 1)
	page = request.GET.get('item')

	try:
		work = paginator.page(page)
	except PageNotAnInteger:
		work = paginator.page(1)
	except EmptyPage:
		work = paginator.page(paginator.num_pages)

	data = {
		'work': work
	}

	return render(request, 'pages/works.html', data)



def contacts(request):
	if request.POST:
		data = {
			'name': request.POST['user_name'],
			'email': request.POST['user_email'],
			'site': request.POST['user_site'] or 'none',
			'msg': request.POST['user_msg'], 
		}

		msg = Mesage(	name=data['name'], email=data['email'], 
						website=data['site'], text=data['msg']	)
		msg.save()
		return render(request, 'pages/feedback.html', { 'name': data['name'] })
	else:
		return render(request, 'index.html', {})



def addlike(request, pk):
	url = 'works?item={}'.format(pk)
	work = get_object_or_404(PortfolioItem, pk=pk)
	work.likes += 1
	work.save()

	return HttpResponseRedirect(url)