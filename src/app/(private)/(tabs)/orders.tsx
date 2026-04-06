import { OrdersView } from "../../../viewModels/Orders/Orders.view";
import { userOrdersViewModel } from "../../../viewModels/Orders/useOrders.viewModel";



export default function Orders() {
    const viewModel = userOrdersViewModel()

    return <OrdersView {...viewModel}/>
}
 