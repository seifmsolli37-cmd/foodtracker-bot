console.log("🍔 FoodTracker Bot is starting...");
const startBot = async () => {
    try {
        console.log("✅ Bot started successfully!");
    } catch (error) {
        console.error("❌ Error starting bot:", error);
        process.exit(1);
    }
};
startBot();