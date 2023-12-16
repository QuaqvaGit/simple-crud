﻿namespace backend.Models;

public partial class Order
{
    public int Id { get; set; }

    public int ProductQuantity { get; set; }

    public int ProductCode { get; set; }

    public int ContractNumber { get; set; }

    public virtual Contract ContractNumberNavigation { get; set; } = null!;

    public virtual Product ProductCodeNavigation { get; set; } = null!;
}
