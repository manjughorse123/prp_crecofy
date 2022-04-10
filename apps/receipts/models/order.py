from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinValueValidator
from apps.campaigns.models import Campaign
from apps.receipts.models.article import Article

class OrderLine(models.Model):
    article = models.ForeignKey('Article', on_delete=models.SET_NULL, null=True)
    receipt = models.ForeignKey('Receipt', on_delete=models.CASCADE, related_name='orderline',null=True,blank=True)
    store = models.ForeignKey('Store', on_delete=models.SET_NULL, null=True)
    member = models.ForeignKey('members.Member', on_delete=models.SET_NULL, null=True)

    count = models.IntegerField(validators=[MinValueValidator(0)])
    # orderLine.itemPrice.currency
    currency = models.CharField(max_length=16)
    # orderLine.itemPrice.vat
    item_vat = models.FloatField(validators=[MinValueValidator(0.0)])
    # orderLine.itemPrice.value
    item_price = models.FloatField(validators=[MinValueValidator(0.0)])
    timestamp = models.DateTimeField(auto_now_add=True,null=True,blank=True)
    @staticmethod
    def get(order: dict, article, store, receipt, member):
        """
        @param orderLine: single order from storebox API
        @return: OrderLine object
        """
        return OrderLine(receipt=receipt,
                         store=store,
                         member=member,
                         article=article,
                         currency=order['itemPrice']['currency'],
                         item_vat=order['itemPrice']['vat'],
                         item_price=order['itemPrice']['value'],
                         count=order['count'])

    @classmethod
    def make_anonymous(cls, member_id):
        """Make member orders anonymous."""
        return cls.objects.filter(member_id=member_id).update(member=None)

class Purchase(models.Model):
    order_id = models.CharField(max_length=300)
    order_date = models.DateTimeField(auto_now_add=True)
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    totalItems = models.IntegerField(default=0)
    totalPrice = models.DecimalField(default=0, decimal_places=2,max_digits=20)

    def __str__(self):
        return self.order_id