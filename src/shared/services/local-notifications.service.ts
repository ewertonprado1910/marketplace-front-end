import * as Notifications from "expo-notifications"
import { Platform } from "react-native"
import { colors } from "../../styles/colors"

const DEFAULT_CHANNEL = "default"

const NOTIFICATIO_IDS = {
    CART_REMINDER: "cart-reminder",
    PURCHASE_FEEDBACK: "purchase-feedback"
}

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldPlaySound: true,
        shouldShowBanner: true,
        shouldSetBadge: false,
        shouldShowList: true
    })
})

const setupNotificationChannel = async () => {
    if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync(DEFAULT_CHANNEL, {
            name: "Notificações",
            importance: Notifications.AndroidImportance.HIGH,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: colors["purple-base"],
        })
    }
}

interface ScheduleCartReminderInterface {
    productName: string
    productId: number,
    delayInMinute: number
}

const scheduleCartReminder = async ({
    productName,
    productId,
    delayInMinute
}: ScheduleCartReminderInterface) => {
    const hasPemission = await Notifications.requestPermissionsAsync()

    if (hasPemission.status !== "granted") return

    await setupNotificationChannel()

    const notification = await Notifications.scheduleNotificationAsync({
        identifier: NOTIFICATIO_IDS.CART_REMINDER,
        content: {
            title: "Você esqueceu algo no carrinho",
            body: `O produto "${productName}" esta esperando por você...`,
            data: {
                type: "cart-reminder",
                productId: String(productId),
            }
        },
        trigger: {
            type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
            seconds: delayInMinute
        }
    })
    console.log("NOTIFICAÇÃO-CONFIGURADA")
    return notification
}

export const localNotificationsService = {
    scheduleCartReminder
}





