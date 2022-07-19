-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: carsdata
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `car_image`
--

DROP TABLE IF EXISTS `car_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `carId` int NOT NULL,
  `image` varchar(512) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_.car_image_car_idx` (`carId`),
  CONSTRAINT `fk_.car_image_car` FOREIGN KEY (`carId`) REFERENCES `car` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_image`
--

LOCK TABLES `car_image` WRITE;
/*!40000 ALTER TABLE `car_image` DISABLE KEYS */;
INSERT INTO `car_image` VALUES (1,3,'https://cdn.audi.hr/media/Model_Gallery_DetailImage_Image_Small_Component/56379-539012_65034-image-small/dh-1395-022074/4ddf4659/1657111620/1920x1080-aa4-l-191001-oe.jpg'),(2,3,'https://www.automobili.ba/wp-content/uploads/2019/12/Audi-A4-2020-1.jpg'),(3,3,'https://ams.hr/wp-content/uploads/2019/05/Audi-A4_2019_2-6-e1557992724628.jpg'),(4,2,'https://s5.pik.ba/galerija/2020-04/19/09/slika-1693573-5e9c0143041d8-velika.jpg'),(5,5,'http://www.carlander.ba/wp-content/uploads/2019/09/Test-Specijal-Golf-7-2.0-tdi-dsg-r-line-2019-03.jpg'),(6,6,'https://www.automobilesreview.com/img/2016-alfa-romeo-gulia/2016-alfa-romeo-gulia-02.jpg'),(7,9,'https://beta.finance.si//bmc/pics//cache_MA/MAN-1-5e41dadc8206d-5e41dadc861bb.jpg'),(8,10,'https://cdn-hr.skoda.at/media/Theme_UIElement_Image_Small_Component.Theme_UIElement_Slideshow_Item_Image_Component/4474-54006-106923-106924-image-small/dh-991-400692/8c70a64b/1656914548/skoda-octavia-m62-exterior-01-mkz.jpg');
/*!40000 ALTER TABLE `car_image` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-19 22:58:55
