using backend.Models;
using backend.Database;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : BaseController<Order, OrderViewModel>
    {
        public OrderController(TypographyContext context): base(context, (context) => context.Orders) {}

        protected override Order EntityFromViewModel(OrderViewModel viewModel, int? id = null)
        {
            return new Order() {
                Id = id,
                ProductQuantity = viewModel.ProductQuantity,
                ProductCode = viewModel.ProductCode,
                ContractNumber = viewModel.ContractNumber
            };
        }
    }
}