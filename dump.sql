-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: provadb
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `prodotti`
--

DROP TABLE IF EXISTS `prodotti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prodotti` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descrizione` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `quantita` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prodotti`
--

LOCK TABLES `prodotti` WRITE;
/*!40000 ALTER TABLE `prodotti` DISABLE KEYS */;
INSERT INTO `prodotti` VALUES (1,'Monitor LED IPS 4K UHD con bordi sottili','Monitor 27\"',10),(2,'Sedia da ufficio con supporto lombare regolabile','Sedia Ergonomica',12),(3,'Stampante laser a colori Wi-Fi con scanner','Stampante Multifunzione',5),(4,'HDD portatile USB 3.0 autoalimentato','Hard Disk Esterno 2TB',30),(5,'Webcam con microfono integrato per videoconferenze','Webcam 1080p',20),(6,'Cavo HDMI 2.1 ad altissima velocità placcato oro','Cavo HDMI 2m',50),(7,'Router dual-band ad alte prestazioni per gaming','Router Wi-Fi 6',8),(8,'Orologio fitness con cardiofrequenzimetro e GPS','Smartwatch Sport',15),(9,'Zaino impermeabile multitasche per PC','Zaino per Laptop 15.6\"',22),(10,'Altoparlanti portatili stereo resistenti all\'acqua','Casse Bluetooth',18),(11,'Tappetino da scrivania 90x40cm antiscivolo','Tappetino Mouse XXL',40),(12,'Pen drive USB 3.2 super veloce','Chiavetta USB 128GB',60),(13,'Stand in alluminio regolabile in altezza','Supporto per Monitor',14),(14,'Tastiera a membrana silenziosa layout IT','Tastiera Wireless',25),(15,'Caricabatterie portatile con ricarica rapida','Powerbank 20000mAh',35);
/*!40000 ALTER TABLE `prodotti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utenti`
--

DROP TABLE IF EXISTS `utenti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utenti` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `ruolo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK9b90mk1nolf3ou90p42a93tjo` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utenti`
--

LOCK TABLES `utenti` WRITE;
/*!40000 ALTER TABLE `utenti` DISABLE KEYS */;
INSERT INTO `utenti` VALUES (1,'admin@example.com','$2a$10$4eJhTY9JGnXepri5JHSi3u98/ouJNoDoj8k0aP0BtJFpnAIyRaAzm','ADMIN'),(2,'user@example.com','$2a$10$AyXTm1dbIvfcmvahRVXRMOn3Y05hBCofyRlK0FqHqTvAqCdQ3.0YS','USER');
/*!40000 ALTER TABLE `utenti` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-24 14:35:39
