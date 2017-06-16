/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50619
Source Host           : localhost:3306
Source Database       : test2

Target Server Type    : MYSQL
Target Server Version : 50619
File Encoding         : 65001

Date: 2017-06-06 00:42:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `clerk`
-- ----------------------------
DROP TABLE IF EXISTS `clerk`;
CREATE TABLE `clerk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `old` int(11) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of clerk
-- ----------------------------
INSERT INTO `clerk` VALUES ('2', 'bb', '32', '33434');
INSERT INTO `clerk` VALUES ('3', 'ff', '23', '343434');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `username` varchar(255) DEFAULT NULL,
  `password` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '12345', '1');
INSERT INTO `users` VALUES ('aa', '654321', '2');
INSERT INTO `users` VALUES ('bb', '654321', '3');
