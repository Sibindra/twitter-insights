const connectDB = async () => {
    try {
      if (mongoose.connection.readyState === 0) {
        while (mongoose.connection.readyState !== 1) {
          await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
        }
        console.log("Database connected");
      }
    } catch (error) {
      console.log(error);
    }
  };
  