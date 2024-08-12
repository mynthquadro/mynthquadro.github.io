const parts = ['Raumkupplung 5-armig', 'Raumkupplung 4-armig', 'Raumkupplung 3-armig',
    'Flaechenkupplung 4-armig', 'Flaechenkupplung 3-armig', 'Flaechenkupplung 2-armig (90Grad)', 'Flaechenkupplung 2-armig (180Grad)',
    'Winkelkupplung (45Grad)', 'Rohr 10 cm', 'Rohr 15 cm', 'Rohr 20 cm', 'Rohr 25 cm', 'Rohr 35 cm', 'Rohr 35 cm 135Grad (3 Loecher)', 'Rohr 75 cm', 'Bogenrohr',
    'Platte 40 × 40 cm', 'Platte 40 × 20 cm', 'Lochplatte 40 × 40 cm', 'Rundtextile',
    'Multirad', 'Multirad Radlager', 'Multirad Arretierung', 'Laufreifen',
    'Dachtextil', 'Doppelrohrverbinder', 'Aluminiumprofil', 'Aluminiumprofil-Verbinder', 'Dachtextil (Baby Ballcage)',
    'Laufrolle', 'Laufrolle Adapter', 'Spielsack', 'Rutsche', 'Rutschenauslauf', 'Bogenrutsche',
    'Poolfolie S', 'Poolfolie L', 'Poolfolie XXL', 'All-Terrain Rad', 'All-Terrain Rad Arretierung',
    'Raumkupplung 6-armig', 'Plexiglass', 'Lagerkupplung', 'Lochzapfenkupplung 1-armig', 'Rohr 11 cm', 'Rohr 17cm', 'Flexikupplung Scharnier', 'Rohrkammer', 'Flexikupplung Bolzen', 'Lochzapfenkupplung 3-armig'];

const partsCh = ['5向连接件', '4向连接件', '3向连接件',
    '十字连接件', 'T形连接件', 'L形连接件', '1形连接件',
    '斜角件', '10厘米管', '15厘米管', '20厘米管', '25厘米管', '35厘米管', '135度3洞35厘米管', '75厘米管', '弧形管',
    '大板', '半板', '洞洞板', '方形布',
    '多用轮', '多用轮垫圈', '多用轮固定件', '轮胎带',
    '顶棚', '双管8字连接件', '铝管', '铝管连接件', '宝宝球池顶棚',
    '脚轮', '脚轮适配器', '游戏袋', '滑梯', '模块式滑梯下板', '弧形滑梯',
    '小号泳池', '大号泳池', '加大号泳池', '越野轮', '越野轮连接件',
    '6向连接件', '亚克力板', '轴承连接件（母头）', '轴承连接件（公头）',
    '11厘米管', '17厘米管', '软连接件', '开口8字连接件', '软连接件轴', '轴承T连接件'];

const partsImgSrc = ['cs5-scaled.svg', 'cs4-scaled.svg', 'cs3-scaled_0.svg',
    'cf4-scaled.svg', 'cf3-scaled.svg', 'cs2-scaled.svg', 'cf2-scaled.svg',
    'c45-scaled.svg', 't10-scaled.svg', 't15.svg', 't20-scaled.svg', 't25-scaled.svg', 't35.svg', 'ts5-scaled_1.svg', 't75-scaled.svg', 'tc1-scaled.svg',
    'pa4-scaled_0.svg', 'pa2-scaled_0.svg', 'po4-scaled_0.svg', 'xrd-scaled.svg',
    'wmu-scaled.svg', 'wmb-scaled.svg', 'wml-scaled.svg', 'wtr-scaled.svg',
    'xrf-scaled.svg', 'cdt-scaled_0.svg', 'alu-scaled.svg', 'alc-scaled.svg', 'xbb-scaled.svg',
    'mcr-scaled.svg', 'wra-scaled.svg', 'xpb-scaled.svg', 'msb-scaled.svg', 'sro-scaled.svg', 'csb-scaled.svg',
    'pls-scaled.svg', 'pll-scaled.svg', 'plx-scaled.svg', 'mat-scaled.svg', 'mal-scaled.svg',
    'cs6-scaled.svg', 'pxg-scaled.svg', 'cbr-scaled.svg', 'ch1-scaled.svg',
    't10-scaled.svg', 't15.svg', 'cxb-scaled.svg', 'ccl-scaled.svg', 'cxa.svg', 'ch3.svg'];

const partsEn = ['5way connector, black;', '4way connector, black;', '3way connector, black;',
    'cross connector, black;', 'T connector, black;', 'elbow, black;', '2way connector, black;',
    'diagonal connector, black;', 'tube, 10 cm, red;', 'tube, 15 cm, red;', 'tube, 20 cm, red;', 'tube, 25 cm, red;', 'tube, 35 cm, red;', 'TBD', 'tube, 75 cm, red;', 'tube bend, red;',
    'panel, for 35 cm x 35 cm, red;', 'panel, for 15 cm x 35 cm, red;', 'TBD', 'textil, red;',
    'multi wheel, red;', 'bearing for multi wheel, black;', 'steering lock, red;', 'TBD',
    'roof cover;', 'double tube connector, red;', 'alu-profile, 60 cm, alu;', 'connector for alu-profiles, 40 cm, alu;', 'roof cover, large;',
    'casters, black;', 'TBD', 'bag, blue;', 'straight slide without run-out, red;', 'run-out for slide, yellow;', 'curved slide without run-out, green;',
    'pool small, blue;', 'pool large, blue;', 'TBD', 'floating wheel, black;', 'hub cap, red;',
    '6way connector, black;', 'TBD', 'bearing joint, black;', '1way hole coupling, black;',
    'tube, 11 cm, red;', 'tube, 17 cm, red;', 'flexible connector, 1 arm without bolt, black;', 'tube clamp (pool/lodge), red;', 'flexi-bolt, 15 cm, black;', '3way hole coupling, black;'];
/*暂无对应英文：35cm3洞管，洞洞板，多轮履带，万向轮转接头，超大泳池布，亚克力板*/

const partsForExport = ['5通连接器, black;', '4通连接器, black;', '3通连接器, black;',
    '十字连接器, black;', 'T型连接器, black;', 'L型连接器, black;', '一字连接器, black;',
    '45度连接器, black;', '管, 10 cm, red;', '管, 15 cm, red;', '管, 20 cm, red;', '管, 25 cm, red;', '管, 35 cm, red;', 'TBD', '管, 75 cm, red;', '弧形管, red;',
    '面板, 35 cm x 35 cm, red;', '面板, 15 cm x 35 cm, red;', 'TBD', '布片, red;',
    '多轮, red;', '多轮轴承, black;', '多轮锁, red;', 'TBD',
    '房顶;', '双管连接器, red;', '铝管, 60 cm, alu;', '铝管连接器, 40 cm, alu;', '大房顶, large;',
    '脚轮, black;', 'TBD', '布兜, blue;', '直滑梯（无尾部）, red;', '滑梯尾部, yellow;', '弧形滑梯（无尾部）, green;',
    '小游泳池, blue;', '大游泳池, blue;', 'TBD', '越野轮, black;', '越野轮锁, red;',
    '6通连接器, black;', 'TBD', '轴承连接器, black;', '孔连接器, black;',
    '管, 11 cm, red;', '管, 17 cm, red;', '柔性连接器铰链, black;', '管夹（游泳池/小屋）, red;', '软连接件轴暂定, balck;', '轴承T连接件暂定, balck;'];
/*暂无对应中文：35cm3洞管，洞洞板，多轮履带，万向轮转接头，超大泳池布，亚克力板*/

const kits = [
    ["My First QUADRO", 0, 4, 7, 0, 9, 4, 1, 4, 0, 0, 0, 4, 30, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["STARTER", 2, 7, 6, 0, 8, 8, 3, 0, 0, 0, 0, 0, 48, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["BASIC", 2, 10, 6, 2, 8, 8, 5, 4, 0, 8, 0, 0, 46, 0, 0, 0, 4, 0, 0, 1, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["JUNIOR", 2, 10, 6, 1, 10, 10, 7, 4, 0, 2, 0, 0, 66, 0, 0, 0, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["UNIVERSAL", 2, 14, 8, 1, 10, 10, 11, 4, 0, 2, 0, 0, 81, 0, 0, 0, 8, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["ULTIMATE", 4, 23, 20, 2, 18, 17, 10, 8, 0, 37, 0, 4, 103, 0, 0, 0, 16, 14, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["BEGINNER", 0, 4, 6, 0, 5, 5, 1, 4, 0, 8, 0, 0, 19, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["ADVENTURE", 0, 8, 4, 0, 4, 14, 2, 4, 0, 10, 0, 0, 34, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["ADVENTURE PLUS", 2, 8, 4, 1, 4, 14, 2, 4, 0, 10, 0, 0, 34, 0, 0, 0, 8, 0, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['KLETTERPARKOUR', 0, 8, 12, 0, 10, 10, 2, 8, 0, 16, 0, 0, 38, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    ["KLETTERPYRAMIDE", 3, 8, 15, 2, 6, 5, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["EVOLUTION", 4, 10, 12, 1, 11, 12, 4, 4, 0, 18, 0, 4, 60, 0, 0, 0, 8, 9, 0, 0, 2, 2, 2, 2, 0, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["国产evo", 4, 10, 13, 1, 12, 12, 4, 4, 0, 18, 0, 4, 60, 0, 0, 0, 8, 9],
    ["OFFROAD", 2, 10, 6, 2, 8, 8, 5, 4, 0, 12, 0, 0, 46, 0, 0, 0, 4, 2, 0, 1, 0, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0],
    ["MOeBEL KIT S", 1, 6, 9, 0, 2, 9, 1, 0, 0, 6, 0, 0, 35, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["MOeBEL KIT L", 4, 13, 14, 0, 11, 13, 3, 0, 0, 23, 0, 0, 57, 0, 0, 0, 4, 4, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["MODULARRUTSCHE", 0, 0, 0, 0, 0, 2, 6, 0, 0, 4, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    ["BOGENRUTSCHE", 0, 0, 0, 0, 3, 4, 5, 0, 1, 7, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    ["INTEGRALRUTSCHE", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["POOL S", 0, 2, 6, 0, 2, 8, 1, 0, 0, 13, 0, 0, 9, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    ["POOL L", 0, 4, 16, 0, 4, 4, 4, 0, 0, 0, 0, 0, 42, 0, 4, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    ["POOL XXL", 0, 12, 20, 0, 0, 4, 8, 0, 0, 0, 0, 0, 56, 0, 6, 4, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    ["MOBIL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["SPECIAL KIT", 0, 2, 0, 0, 0, 2, 0, 4, 0, 6, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["HOME ACTION KIT", 0, 2, 0, 1, 0, 0, 3, 4, 0, 3, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["UPGRADE KIT", 0, 6, 0, 0, 6, 8, 4, 4, 0, 16, 0, 0, 13, 0, 0, 0, 10, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["YOUNGSTER", 0, 6, 6, 0, 8, 8, 4, 4, 0, 2, 0, 0, 40, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["GENIUS", 3, 17, 11, 1, 13, 5, 4, 4, 0, 2, 0, 0, 86, 0, 0, 0, 10, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['DS-030', 6, 30, 14, 6, 36, 12, 15, 8, 10, 17, 26, 0, 129, 0, 0, 0, 21, 6, 7, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2],
    ['DS-041', 18, 37, 19, 26, 47, 10, 14, 0, 40, 19, 10, 0, 221, 0, 0, 0, 28, 8, 19, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2],
    ['DS-029', 16, 8, 20, 0, 8, 0, 0, 0, 0, 0, 0, 0, 134, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12],
    ["DS-036", 4, 22, 9, 8, 31, 8, 11, 4, 17, 14, 11, 0, 100, 0, 0, 0, 15, 4, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2],
    ["DS-040", 16, 21, 8, 4, 16, 6, 0, 0, 6, 6, 6, 0, 121, 0, 0, 0, 5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
    ["DS-017", 5, 20, 9, 6, 16, 13, 8, 4, 9, 23, 6, 0, 77, 0, 0, 0, 9, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    ["DS-020", 12, 27, 15, 10, 29, 13, 17, 8, 1, 17, 25, 0, 150, 0, 0, 0, 22, 6, 8, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2],
    ["DS-024", 3, 24, 9, 6, 16, 8, 9, 8, 12, 14, 2, 0, 87, 0, 0, 0, 13, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2],
    ["DS-0125", 24, 47, 18, 7, 32, 11, 16, 8, 11, 21, 15, 0, 228, 0, 0, 0, 22, 4, 6, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 2],
    ["DS-027", 8, 23, 14, 9, 30, 10, 13, 8, 9, 18, 13, 0, 126, 0, 0, 0, 20, 4, 7, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0],
    ["DS-421", 4, 24, 11, 3, 15, 6, 11, 8, 7, 14, 3, 0, 94, 0, 0, 0, 18, 2, 6, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    ['国产CLUP', 4, 15, 15, 2, 12, 13, 4, 4, 0, 16, 0, 0, 77, 0, 0, 0, 11, 2, 0, 0, 0, 0, 0, 0, 0, 2],
    ['Square Kit', 0, 0, 6, 0, 0, 3, 0, 2, 0, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['长管羊毛包', 2, 6, 0, 2, 5, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    ['短管羊毛包', 2, 6, 0, 2, 5, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    ['小兽套', 3, 7, 8, 1, 11, 12, 2, 4, 0, 12, 0, 4, 50, 0, 0, 0, 10, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['大兽套', 4, 17, 15, 2, 19, 14, 4, 4, 0, 25, 0, 4, 88, 0, 0, 2, 10, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['羊毛家具', 4, 15, 14, 2, 14, 13, 3, 0, 0, 23, 0, 0, 57, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

if (window.addEventListener) {
    document.addEventListener('DOMContentLoaded', FillHtml);
} else if (window.attachEvent) {
    document.attachEvent('onDOMContentLoaded', FillHtml);
}

let kitsvalue = [];/*save current kits amounts for calc*/

function FillHtml() {
    /*display gitee link for some timezone*/
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[1];
    const china = ['Shanghai', 'Urumqi'];
    if (china.indexOf(timezone) >= 0 && document.URL.indexOf('github') >= 0) {
        //document.getElementById('mirror-link').innerHTML = '<a href="https://mynthquadro-github-io.vercel.app/quadro/calc.html" style="font-size:1.5em;">如遇卡顿请点此链接前往镜像站</a>';
    }

    if (parts.length != partsCh.length || parts.length != partsImgSrc.length) {
        console.log("Error:parts data length unequal");
        return false;
    }

    /*display qrcode*/
    const qrcode = getCookie('qrmini');
    if (qrcode == '') {
        document.getElementById('qrcodewx').style.display = 'block';
    } else {
        minimal();
    }

    /*fill kitslist*/
    const kitsRows = document.getElementsByClassName("kits-row");
    for (let i = 0; i < kits.length; i++) {
        kitsvalue.push(0);
        kitsRows[i].innerHTML += '<div class="kits-input"><div  contenteditable="true" oninput="Calc();" class="kits-amount">0</div><button class="reducekit">-</button></div>';
    }

    /*fill partslist*/
    let addHtml = '';
    for (let i = 0; i < parts.length; i++) {
        const p = "alert('" + parts[i] + "[" + partsCh[i].replace(/\(/g, '[').replace(/\)/g, ']') + "]" + "');";
        addHtml += '<div class="part-row"><div class="part-row-img" onclick="' + p + '"><img src="part_img/' + partsImgSrc[i] + '"></div><div  contenteditable="true" onclick="partsChanged()" class="amount"></div></div>';
    }
    document.getElementById("partslistdech").innerHTML = addHtml;

    /*display total models amount*/
    const design_num_elm = document.getElementsByClassName("design-count");
    design_num_elm[0].textContent = design.length;
    design_num_elm[1].textContent = design.length;

    /*计算自定义造型数*/
    const m_design_num_elm = document.getElementById("m-design-count");
    let m_design_count = 0;
    design.forEach(model => {
        const modelName = model[0];
        if (modelName.charAt(0) === 'M' && modelName.charAt(1) !== 'A') {
            m_design_count++;
        }
    });
    m_design_num_elm.textContent = m_design_count - 3;

    const kitsbtn = document.getElementsByClassName("addkit");
    const kitsa = document.getElementsByClassName("kits-amount");
    const reducekitsbtn = document.getElementsByClassName("reducekit");
    for (let i = 0; i < kitsbtn.length; i++) {
        /*click button to add kit and calculate*/
        kitsbtn[i].addEventListener('click', () => {
            kitsa[i].textContent = parseInt(kitsa[i].textContent) + 1;
            Calc();
        });
    }

    for (let i = 0; i < reducekitsbtn.length; i++) {
        /*click button to reduce kit and calculate*/
        reducekitsbtn[i].addEventListener('click', () => {
            kitsa[i].textContent = parseInt(kitsa[i].textContent) - 1;
            Calc();
        });
    }

    // 为每个includes-select元素添加点击事件监听器
    const select_elm = document.querySelectorAll('.includes-select');
    select_elm.forEach(function (element) {
        element.addEventListener('click', function () {
            element.classList.toggle('selected');
        });
    });

    /*intial file input*/
    const fileInput = document.getElementById("fileInput");
    fileInput.addEventListener('change', handleFileSelect);

    const dropArea = document.getElementById('dropArea');
    dropArea.addEventListener(
        "click",
        (e) => {
            if (fileInput) {
                fileInput.click();
            }
        },
        false,
    );
    dropArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropArea.classList.add('active');
    });
    dropArea.addEventListener('dragleave', (event) => {
        event.preventDefault();
        dropArea.classList.remove('active');
    });
    dropArea.addEventListener('drop', handleFileDrop);
}

let partsIsNotNull = false;
function partsChanged() {
    partsIsNotNull = true;
}

var files;
/*change color of qdf file*/
function changeColor(element) {
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
    } else {
        element.classList.add('selected');
    }
}

function handleFileDrop(event) {
    event.preventDefault();
    const dropArea = document.getElementById('dropArea');
    dropArea.classList.remove('active');
    files = event.dataTransfer.files;
    document.getElementById('dropArea').innerHTML = '已选择 ' + files.length + ' 个文件';
}

function handleFileSelect(event) {
    files = event.target.files;
    document.getElementById('dropArea').innerHTML = '已选择 ' + files.length + ' 个文件';
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//随机染色
function multicolor() {
    const colorset = [
        '1.,0.,0.', '0.,0.5,0.1', '0.,0.,1.', '1.,1.,0.',
        '0.92,0.92,0.88', '0.46,0.45,0.43',
        '1.,0.7255,0.8471', '0.6118,0.4471,0.6039',
        '0.7176,0.8353,0.7098', '0.251,0.5686,0.4314',
        '0.5529,0.7765,1.', '0.2314,0.3647,0.5294',
        '1.,1.,0.5725'//Dio黄75
    ];
    let material = '';
    let materialid = 99;
    const color_ids = document.getElementsByClassName('selected');
    if (color_ids.length <= 0) {
        alert('请选择颜色');
        return false;
    }
    if (!files) {
        alert('请上传qdf文件');
        return false;
    }
    let tubeColors = [];
    let panelColors = [];
    for (let i = 0; i < color_ids.length; i++) {
        const color_id = color_ids[i].getAttribute('data-id');
        if (color_id == 0) {
            tubeColors.push(99, 97, 95, 93);
            panelColors.push(98, 96, 94, 92);
        } else {
            tubeColors.push(91, 89);
            panelColors.push(90, 88);
            if (color_id == 4) {//dio黄
                tubeColors.push(75);
                panelColors.push(74);
            } else {
                tubeColors.push(91 - color_id * 4, 89 - color_id * 4);
                panelColors.push(90 - color_id * 4, 88 - color_id * 4);
            }
        }
    }
    for (let i = 0; i < colorset.length; i++) {
        material += 'material3{' + materialid + ',"TJSt' + materialid + '", 1, ' + colorset[i] + ', 0.5,1.,1.,7.5, 0.3,0.,0.,7.5, "", 0}\n';//add tube color material
        materialid--;
        material += 'material3{' + materialid + ',"TJSp' + materialid + '", 1, ' + colorset[i] + ', 0.6,0.5,0.5,7.5, 0.6,0.5,0.5,7.5, "", 0}\n';//add panel color material
        materialid--;
    }
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const name = 'color_' + files[i].name;
        if (name.substring(name.lastIndexOf('.')) != '.qdf') {
            document.getElementById('color-info').innerHTML += name + '不是qdf文件<br>';
            continue;
        }
        reader.onload = (event) => {
            let fileContent = event.target.result.split('\n');
            fileContent[0] = fileContent[0] + '\n' + material;

            let fileResult = fileContent[0];
            for (let j = 1; j < fileContent.length; j++) {
                const start_index = fileContent[j].indexOf('{');
                const end_index = fileContent[j].indexOf(',');
                if (fileContent[j].includes('tube') || fileContent[j].includes('multi-wheel2')) {
                    fileContent[j] = fileContent[j].substring(0, start_index + 1) + tubeColors[Math.floor(Math.random() * tubeColors.length)] + fileContent[j].substring(end_index);
                } else if (fileContent[j].includes('panel')) {
                    fileContent[j] = fileContent[j].substring(0, start_index + 1) + panelColors[Math.floor(Math.random() * panelColors.length)] + fileContent[j].substring(end_index);
                } else if (fileContent[j].includes('clamp2') || fileContent[j].includes('steering-lock2')) {
                    fileContent[j] = fileContent[j].substring(0, start_index + 1) + [99, 89][Math.floor(Math.random() * 2)] + fileContent[j].substring(end_index);
                } else if (fileContent[j].includes('connector3')) {
                    fileContent[j] = fileContent[j].substring(0, start_index + 1) + '1' + fileContent[j].substring(end_index);
                }
                fileResult += fileContent[j].replace(/\r/g, '') + '\r\n';
            }

            downloadColorQDF(name, fileResult);
        };
        reader.readAsText(files[i]);
    }
}
//连接件染色
function connectorColor() {
    if (!files) {
        alert('请上传qdf文件');
        return false;
    }
    const colorset = [
        '1.,0.3,0.', '1.,1.,0.', '0.,0.3,0.', '0.,0.,1.',
        '0.5,0.,0.5', '1.,0.,0.', '0.,1.,1.', '1.,0.753,0.796'
    ];
    let material = '';
    let materialid = 73;
    for (let i = 0; i < colorset.length; i++) {
        material += 'material3{' + materialid + ',"TJSc' + materialid + '", 1, ' + colorset[i] + ', 0.5,1.,1.,7.5, 0.3,0.,0.,7.5, "", 0}\n';//add connector color material
        materialid--;
    }
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const name = 'colorconnector_' + files[i].name;
        if (name.substring(name.lastIndexOf('.')) != '.qdf') {
            document.getElementById('color-info').innerHTML += name + '不是qdf文件<br>';
            continue;
        }
        reader.onload = (event) => {
            let fileContent = event.target.result.split('\n');
            fileContent[0] = fileContent[0] + '\n' + material;

            let fileResult = fileContent[0];
            for (let j = 1; j < fileContent.length; j++) {
                const start_index = fileContent[j].indexOf('{');
                const end_index = fileContent[j].indexOf(',');
                if (fileContent[j].includes('tube2{')) {
                    fileContent[j] = fileContent[j].substring(0, start_index + 1) + '10' + fileContent[j].substring(end_index);
                } else if (fileContent[j].includes('panel2{')) {
                    fileContent[j] = fileContent[j].substring(0, start_index + 1) + '10' + fileContent[j].substring(end_index);
                } else if (fileContent[j].includes('connector3{')) {
                    const connectCode = parseInt(fileContent[j].split(',')[10]);
                    switch (connectCode) {
                        case 63:
                            fileContent[j] = fileContent[j].substring(0, start_index + 1) + '66' + fileContent[j].substring(end_index);
                            break;
                        case 31: case 47: case 55: case 59: case 61: case 62:
                            fileContent[j] = fileContent[j].substring(0, start_index + 1) + '67' + fileContent[j].substring(end_index);
                            break;
                        case 23: case 27: case 29: case 30: case 39: case 43: case 45: case 46: case 53: case 54: case 57: case 58:
                            fileContent[j] = fileContent[j].substring(0, start_index + 1) + '73' + fileContent[j].substring(end_index);
                            break;
                        case 40: case 36: case 34: case 33: case 24: case 20: case 18: case 17: case 10: case 9: case 6: case 5:
                            fileContent[j] = fileContent[j].substring(0, start_index + 1) + '70' + fileContent[j].substring(end_index);
                            break;
                        case 21: case 22: case 25: case 26: case 37: case 38: case 41: case 42:
                            fileContent[j] = fileContent[j].substring(0, start_index + 1) + '72' + fileContent[j].substring(end_index);
                            break;
                        case 7: case 11: case 13: case 14: case 19: case 28: case 35: case 44: case 49: case 50: case 52: case 56:
                            fileContent[j] = fileContent[j].substring(0, start_index + 1) + '71' + fileContent[j].substring(end_index);
                            break;
                        case 60: case 51: case 15:
                            fileContent[j] = fileContent[j].substring(0, start_index + 1) + '69' + fileContent[j].substring(end_index);
                            break;
                        case 3: case 12: case 48:
                            fileContent[j] = fileContent[j].substring(0, start_index + 1) + '68' + fileContent[j].substring(end_index);
                            break;
                    }
                }
                fileResult += fileContent[j].replace(/\r/g, '') + '\r\n';
            }

            downloadColorQDF(name, fileResult);
        };
        reader.readAsText(files[i]);
    }
}
//管染色
function tubeColor() {
    if (!files) {
        alert('请上传qdf文件');
        return false;
    }
    const colorset = [
        '0.,1.,1.', '1.,1.,0.', '0.,0.6,0.', '0.,0.,1.',
        '0.5,0.,0.5', '1.,0.,0.'
    ];//10,15,20,25,75,35cm tube
    let material = '';
    let materialid = 65;
    for (let i = 0; i < colorset.length; i++) {
        material += 'material3{' + materialid + ',"TJStu' + materialid + '", 1, ' + colorset[i] + ', 0.5,1.,1.,7.5, 0.3,0.,0.,7.5, "", 0}\n';//add connector color material
        materialid--;
    }
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const name = 'colortube_' + files[i].name;
        if (name.substring(name.lastIndexOf('.')) != '.qdf') {
            document.getElementById('color-info').innerHTML += name + '不是qdf文件<br>';
            continue;
        }
        reader.onload = (event) => {
            let fileContent = event.target.result.split('\n');
            fileContent[0] = fileContent[0] + '\n' + material;

            let fileResult = fileContent[0];
            for (let j = 1; j < fileContent.length; j++) {
                const start_index = fileContent[j].indexOf('{');
                const end_index = fileContent[j].indexOf(',');
                if (fileContent[j].includes('tube2{')) {
                    const tubeCode = parseInt(fileContent[j].split(',')[9]);
                    //todo 35cm 3hole tube
                    switch (tubeCode) {
                        case 100:
                            fileContent[j] = fileContent[j].substring(0, start_index + 1) + '65' + fileContent[j].substring(end_index);
                            break;
                        case 150:
                            fileContent[j] = fileContent[j].substring(0, start_index + 1) + '64' + fileContent[j].substring(end_index);
                            break;
                        case 200:
                            fileContent[j] = fileContent[j].substring(0, start_index + 1) + '63' + fileContent[j].substring(end_index);
                            break;
                        case 250:
                            fileContent[j] = fileContent[j].substring(0, start_index + 1) + '62' + fileContent[j].substring(end_index);
                            break;
                        case 350:
                            fileContent[j] = fileContent[j].substring(0, start_index + 1) + '60' + fileContent[j].substring(end_index);
                            break;
                        case 750:
                            fileContent[j] = fileContent[j].substring(0, start_index + 1) + '61' + fileContent[j].substring(end_index);
                            break;
                    }
                } else if (fileContent[j].includes('panel2{')) {
                    fileContent[j] = fileContent[j].substring(0, start_index + 1) + '6' + fileContent[j].substring(end_index);
                } else if (fileContent[j].includes('connector3{')) {
                    fileContent[j] = fileContent[j].substring(0, start_index + 1) + '1' + fileContent[j].substring(end_index);
                }
                fileResult += fileContent[j].replace(/\r/g, '') + '\r\n';
            }

            downloadColorQDF(name, fileResult);
        };
        reader.readAsText(files[i]);
    }
}

function downloadColorQDF(title, result) {
    if (result == '') {
        document.getElementById('color-info').innerHTML += '没有可以下载的内容<br>';
        return;
    }
    const downloadLink = document.createElement("a");
    downloadLink.download = title;
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = 'data:text/plain;charset=utf-8,' + result;
    }
    else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = 'data:text/plain;charset=utf-8,' + result;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}

/*get available designs and save in array*/
let recommendhtml = [[], []];
let perpagedefault = [15, 15];
let currentpage = [0, 0];
function getdesign() {
    currentpage[0] = 0;
    recommendhtml[0] = [];
    document.getElementsByClassName('re-current')[0].textContent = '';
    document.getElementsByClassName('re-container')[0].innerHTML = '';
    document.getElementsByClassName('re-footer')[0].style.display = 'none';
    document.getElementsByClassName('recommendinfo')[0].textContent = '';

    let searchAge = document.getElementById("models-age").value;
    let imgwidth = 9;
    if (window.innerWidth < window.innerHeight + 100) {//对于横屏和竖屏，每行显示结果数不同
        imgwidth = 18;
    }
    const amounts = document.getElementsByClassName('amount');
    let pass, missingPart, info, designamount, resulthtml = '', havePartNum, increasePart;
    //增量搜索：最多增加n个部件就可以搭建的模型
    increasePart = document.getElementById('increase-percent').value ? parseInt(document.getElementById('increase-percent').value) : 0;
    for (let i = 0; i < design.length; i++) {
        /*search age*/
        let keyword = design[i][1].split('$');
        if (searchAge != '-1' && keyword.length > 4) {
            const agetemp = keyword[4].split(', ');
            let agebool = false;
            for (let ageI = 0; ageI < agetemp.length; ageI++) {
                agebool = (agetemp[ageI] == searchAge) || agebool;
            }
            if (agebool == false) {
                continue;
            }
        }

        pass = true;
        missingPart = 0;
        info = '';
        for (let j = 0; j < amounts.length; j++) {
            designamount = design[i][j + 2];/*design[i][0]:designname,design[i][1]:img_num*/
            havePartNum = amounts[j].textContent ? parseInt(amounts[j].textContent) : 0;
            if (havePartNum < designamount) {
                if (j == 18 && parseInt(amounts[16].textContent) >= (design[i][20] + design[i][18] + design[i][43])) {
                    info += '<div>you need ' + designamount + ' Lochplatte or replace with Lochplatte 40 × 40 cm.</div>';
                } else if (j == 19 || j == 24 || j == 28) {
                    info += '<div>Textile is not included.</div>';
                }/*else if(j==20){
                    info+='<div>you need '+designamount+' Multirad.</div>';
                }else if(j==21){
                    info+='<div>you need '+designamount+' Multirad Radlager.</div>';
                }else if(j==22){
                    info+='<div>you need '+designamount+' Multirad Arretierung.</div>';
                }*/else if (j == 25) {
                    info += '<div>you need ' + designamount + ' Doppelrohrverbinder or replace with tie wrap.</div>';
                } else if (j == 26 || j == 27) {
                    info += '<div>you need ' + designamount + ' alu or replace it.</div>';
                } else if (j == 31) {
                    info += '<div>you need ' + designamount + ' Spielsack.</div>';
                } else if (j == 35 || j == 36 || j == 37) {
                    info += '<div>you need ' + designamount + ' Pool.</div>';
                } else if (j == 41 && parseInt(amounts[16].textContent) >= (design[i][20] + design[i][18] + design[i][43])) {
                    info += '<div>you need ' + designamount + ' Plexiglass or replace with Lochplatte 40 × 40 cm.</div>';
                } else {
                    if (increasePart == 0) {
                        pass = false;
                        break;
                    } else {
                        missingPart += (designamount - havePartNum);
                        if (missingPart > increasePart) {
                            pass = false;
                            break;
                        }
                    }
                }
            }
        }
        if (pass) {//如有必要，可以添加info
            recommendhtml[0].push(i + '$0');
        }
    }

    if (recommendhtml[0].length == 0) {
        document.getElementsByClassName('recommendinfo')[0].innerHTML = '<span class="lang-en">No available design.</span><span class="lang-ch">没有可用模型。</span>';
        document.getElementsByClassName('re-footer')[0].style.display = 'none';
    } else {
        document.getElementsByClassName('recommendinfo')[0].innerHTML = '<span class="lang-en">Available design</span><span class="lang-ch">可用模型</span>: ' + recommendhtml[0].length;
        document.getElementsByClassName('re-footer')[0].style.display = 'block';
        forpage(0, perpagedefault[0], 0);
    }
}

/*forpage for available designs*/
function forpage(page, perpage, which) {
    let imgwidth = 18;
    if (window.innerWidth < window.innerHeight + 100) {//对于横屏和竖屏，每行显示结果数不同
        imgwidth = 31;
    }
    currentpage[which] = page;
    perpagedefault[which] = perpage;
    let maxindex = perpage;
    let pagehtml = '';
    if (page == 0) {
        document.getElementsByClassName('re-prev')[which].disabled = true;
    } else {
        document.getElementsByClassName('re-prev')[which].disabled = false;
    }
    if ((page + 1) * perpage >= recommendhtml[which].length) {
        document.getElementsByClassName('re-next')[which].disabled = true;
        maxindex = recommendhtml[which].length - page * perpage;
    } else {
        document.getElementsByClassName('re-next')[which].disabled = false;
    }
    for (let i = 0; i < maxindex; i++) {
        let modelhtml = '';
        let modeltemp = recommendhtml[which][page * perpage + i].split('$');//可用模型格式(which=0)：model-id $ selected；搜索模型格式(which=0)：model-id
        const selectedcsss = modeltemp[1] == 1 ? 'border:2px cyan solid;' : '';
        const modelName = design[parseInt(modeltemp[0])][0];
        if (which == 0) {//可用模型
            if (modelName.substring(0, 2) == 'MA') {//quadro程序自带造型
                modelhtml = `
  <div class="possible" style="display:inline-block;${selectedcsss}" id="possible${page * perpage + i}">
    <img onclick="showdesign(${parseInt(modeltemp[0])}, ${page * perpage + i})" style="height:12em;width:${imgwidth}vw;cursor:pointer;object-fit:contain;" src="alt/${modelName}.webp">
  </div>`;
            } else if (modelName.substring(0, 1) == 'M') {//自制造型
                modelhtml = `
  <div class="possible" style="display:inline-block;${selectedcsss}" id="possible${page * perpage + i}">
    <img onclick="showdesign(${parseInt(modeltemp[0])}, ${page * perpage + i})" style="height:12em;width:${imgwidth}vw;cursor:pointer;object-fit:contain;" src="diy_img/${modelName}.webp">
  </div>`;
            } else {//官网造型
                modelhtml = `
  <div class="possible" style="display:inline-block;${selectedcsss}" id="possible${page * perpage + i}">
    <img onclick="showdesign(${parseInt(modeltemp[0])}, ${page * perpage + i})" style="height:12em;width:${imgwidth}vw;cursor:pointer;object-fit:contain;" src="webimg/${modelName.toUpperCase()}-brand.webp">
  </div>`;
            }
        } else {//搜索模型
            if (modelName.substring(0, 2) == 'MA') {//quadro程序自带造型
                modelhtml = `<div class="se-re" style="display:inline-block;">
            <img onclick="showdesign(${parseInt(modeltemp[0])})" style="height:12em;width:${imgwidth}vw;cursor:pointer;object-fit:contain;" src="alt/${modelName}.webp">
            </div>`;
            } else if (modelName.substring(0, 1) == 'M') {//自制造型
                modelhtml = `<div class="se-re" style="display:inline-block;">
            <img onclick="showdesign(${parseInt(modeltemp[0])})" style="height:12em;width:${imgwidth}vw;cursor:pointer;object-fit:contain;" src="diy_img/${modelName}.webp">
            </div>`;
            } else {//官网造型
                modelhtml = `<div class="se-re" style="display:inline-block;">
            <img onclick="showdesign(${parseInt(modeltemp[0])})" style="height:12em;width:${imgwidth}vw;cursor:pointer;object-fit:contain;" src="webimg/${modelName.toUpperCase()}-brand.webp">
            </div>`;
            }
        }
        pagehtml += modelhtml;
    }
    document.getElementsByClassName('re-container')[which].innerHTML = pagehtml;
    document.getElementsByClassName('re-current')[which].textContent = page + 1;
}

/*paginator for available designs*/
function prevpage(which) {
    currentpage[which]--;
    forpage(currentpage[which], perpagedefault[which], which);
}
function nextpage(which) {
    currentpage[which]++;
    forpage(currentpage[which], perpagedefault[which], which);
}

function ResetKitsNum() {
    ResetPartsNum();
    const rs = document.querySelectorAll('.kits-amount');
    for (let i = 0; i < rs.length; i++) {
        rs[i].textContent = '0';
        kitsvalue[i] = 0;
        rs[i].nextElementSibling.style.filter = "opacity(0)";
    }

    /*reset available design*/
    currentpage = 0;
    recommendhtml = [];
    document.getElementsByClassName('re-current')[0].textContent = '';
    document.getElementsByClassName('re-container')[0].innerHTML = '';
    document.getElementsByClassName('re-footer')[0].style.display = 'none';
    document.getElementsByClassName('recommendinfo')[0].textContent = '';
}

function ResetPartsNum() {
    const rs = document.querySelectorAll('.amount');
    rs.forEach(
        function (listObj) {
            listObj.textContent = '';
        }
    );
}

/*calculate parts amount base on kitsvalue*/
function Calc() {
    partsChanged();
    let rs = [], result, temp;
    const cks = document.querySelectorAll('.kits-amount');
    /*kit index and amount to Array*/
    for (let i = 0; i < cks.length; i++) {
        const n = parseInt(cks[i].textContent);
        if (isNaN(n) || n <= 0) {
            cks[i].textContent = '0';
            cks[i].nextElementSibling.style.filter = "opacity(0)";
            rs.push(i, -kitsvalue[i]);
            kitsvalue[i] = 0;
            continue;
        } else {
            cks[i].nextElementSibling.style.filter = "opacity(1)";
            rs.push(i, n - kitsvalue[i]);
            kitsvalue[i] = n;
        }
    }

    /*find kits data and calculate*/
    for (let i = 0; i < rs.length; i += 2) {
        for (let j = 1; j < kits[rs[i]].length; j++) {
            if (kits[rs[i]][j] == 0) {
                continue;
            }
            temp = document.querySelectorAll('.amount')[j - 1].textContent;
            if (temp == '') {
                temp = 0;
            } else {
                temp = parseInt(temp);
            }
            temp += kits[rs[i]][j] * rs[i + 1];
            if (temp == 0) {
                document.querySelectorAll('.amount')[j - 1].textContent = '';
            } else {
                document.querySelectorAll('.amount')[j - 1].textContent = temp;
            }
        }
    }
}

function searchmodel() {
    let imgwidth = 9;
    if (window.innerWidth < window.innerHeight + 100) {
        imgwidth = 18;
    }
    document.getElementsByClassName("se-footer")[0].style.display = 'none';
    recommendhtml[1] = [];
    currentpage[1] = 0;
    document.getElementsByClassName('re-current')[1].textContent = 1;
    /*get search model nummer and part from user*/
    const searchNum = document.getElementsByClassName("search-num")[lang].value.toUpperCase().replace(/Ä/g, 'A').replace(/Ö/g, 'O').replace(/Ü/g, 'U');/*ß.uppercase=SS*/
    const searchPartElm = document.querySelectorAll('.includes-select-area2>.selected');
    let searchNameArr = [];
    let searchPartArr = [];
    searchPartElm.forEach((elm) => {
        const elm_val = elm.getAttribute('value');
        if (isNaN(parseInt(elm_val))) {
            searchNameArr.push(elm_val.toUpperCase());
        } else {
            searchPartArr.push(parseInt(elm_val));
        }
    });
    /*获取搜索年龄和面积*/
    const searchAge = document.getElementsByClassName("search-age")[0].value;
    let searchLength = document.getElementsByClassName("search-length")[0].value;
    let searchWidth = document.getElementsByClassName("search-length")[1].value;
    if (searchLength && searchWidth) {//使length大于等于width
        searchLength=parseInt(searchLength);
        searchWidth=parseInt(searchWidth);
        if (searchWidth > searchLength) {
            let tempLength = searchLength;
            searchLength = searchWidth;
            searchWidth = tempLength;
        }
    } else {
        searchLength = 0;
    }

    let searchtrue = true;
    let hasSearch = false;
    let agetemp = [];
    for (let i = 0; i < design.length; i++) {
        searchtrue = true;
        hasSearch = false;
        const keyword = design[i][1].toUpperCase().replace(/Ä/g, 'A').replace(/Ö/g, 'O').replace(/Ü/g, 'U').split('$');/*keyword[0]:number,[1]:german name,[2]:english name*/
        /*search model nummer or keyword*/
        if (searchNum != '') {
            hasSearch = true;
            if (keyword.length > 1) {
                searchtrue = keyword[1].indexOf(searchNum) >= 0 || keyword[2].indexOf(searchNum) >= 0 || keyword[3].indexOf(searchNum) >= 0;//搜索中文、德语、英语名
            }
            searchtrue = keyword[0].indexOf(searchNum) >= 0 || searchtrue;//搜索编号
            if(!searchtrue){
                continue;
            }
        }
        
        if (searchNameArr.length > 0 && keyword.length > 2) {
            hasSearch = true;
            for (let k = 0; k < searchNameArr.length; k++) {
                const searchName = searchNameArr[k];
                if (searchName == 'TOWER') {/*if search TOWER, then exclude LEARNING TOWER*/
                    searchtrue = (keyword[2].indexOf('TOWER') >= 0 && keyword[2].indexOf('LEARNING TOWER') < 0) && searchtrue;
                } else {
                    searchtrue = keyword[2].indexOf(searchName) >= 0 && searchtrue;
                }
            }
            if(!searchtrue){
                continue;
            }
        }

        /*search part*/
        if (searchPartArr.length > 0) {
            hasSearch = true;
            for (let k = 0; k < searchPartArr.length; k++) {
                const searchPart = searchPartArr[k];
                searchtrue = design[i][searchPart] > 0 && searchtrue;
            }
            if(!searchtrue){
                continue;
            }
        }

        /*search age*/
        if (searchAge != '-1' && keyword.length > 4) {
            hasSearch = true;
            agetemp = keyword[4].split(', ');
            let agebool = false;
            for (let ageI = 0; ageI < agetemp.length; ageI++) {
                agebool = (agetemp[ageI] == searchAge) || agebool;
            }
            searchtrue = agebool;
            if(!searchtrue){
                continue;
            }
        }
        

        /*筛选面积*/
        if (searchLength > 0 && searchWidth > 0) {
            hasSearch = true;
            if(keyword.length<6){
                continue;
            }
            const dimension = keyword[5].split(',')[0].replace(' ', '').replace('CM', '').split('X');
            if(dimension.length<2){
                continue;
            }
            
            let modelLength = parseInt(dimension[0]);
            let modelWidth = parseInt(dimension[1]);
            if (modelLength < modelWidth) {//使length大于等于width
                let tempmodelLength = modelLength;
                modelLength = modelWidth;
                modelWidth = tempmodelLength;
            }
            if(modelLength>parseInt(searchLength)){
                continue;
            }else if(modelWidth>parseInt(searchWidth)){
                continue;
            }
        }

        /*add result*/
        if (searchtrue == true && hasSearch == true) {
            recommendhtml[1].push(i + '$0');
        }
    }
    if (recommendhtml[1].length > 0) {
        document.getElementsByClassName("se-footer")[0].style.display = 'block';
        forpage(0, perpagedefault[1], 1);
    } else {
        document.getElementsByClassName("se-footer")[0].style.display = 'none';
        document.getElementsByClassName("re-container")[1].innerHTML = '<span class="lang-en">no result</span><span class="lang-ch">没有结果</span>';
    }
}

/*show design detail for search result*/
function showdesign(num, recommend_id = -1) {
    let designinfo = '';
    if (design[num][0].substring(0, 2) == 'MA') {//quadro程序自带造型
        designinfo = '<span style="font-size:2em;">' + design[num][0] + '</span>';
        designinfo += ' <a target="_blank" style="font-size:2em;" href="../quadro/alt/'
            + design[num][0] +
            '.qdf" download="'
            + design[num][0] +
            '.qdf">下载qdf</a>';
    } else if (design[num][0].substring(0, 1) == 'M') {//自制造型
        designinfo = '<a target="_blank"  style="font-size:2em;" href="../quadro/diy_pdf/'
            + design[num][0] +
            '.pdf">' + design[num][0] + '</a>';
        const designNum = parseInt(design[num][0].replace('M', ''));
        const noQdf = [58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 82, 83, 84, 85, 86, 88, 89, 90, 92, 94, 101, 109, 128, 129, 141];
        if (designNum < 55 || designNum == 53001 || noQdf.includes(designNum)) {
            //缺少qdf文件
        } else {
            designinfo += ' <a style="font-size:2em;" href="../quadro/diy_qdf/'
                + design[num][0] +
                '.qdf" download="'
                + design[num][0] +
                '.qdf">下载qdf</a>';
        }
    } else {//官网造型
        const designarr = design[num][1].split('$');
        if (false) {//isWechat()
            designinfo = '请复制链接到浏览器打开:<br>https://quadromdb.com/de/designs/' + design[num][0];
        } else {
            designinfo = '<a target="_blank"  style="font-size:2em;" href="https://quadromdb.com/de/designs/'
                + design[num][0] +
                '">' + design[num][0] + '</a>';
        }
        designinfo += '<br>' + designarr[2] + '<br>' + designarr[5] + ', age:' + designarr[4];/*english name + dimension + age*/
    }
    if (recommend_id != -1) {//recommend_id==-1:搜索模型tab中不显示多选框
        let modeltemp = recommendhtml[0][recommend_id].split('$');//可用模型格式(which=0)：model-id $ selected
        const selectedtext = modeltemp[1] == 1 ? 'checked' : '';
        designinfo += '<br><span style="font-size:2em;">加入多选：<input style="width:30px;height:30px;" onchange="showCompare(' + recommend_id + ')" type="checkbox" ' + selectedtext + '></span><br>';
    }
    document.getElementsByClassName('se-container')[0].style.display = 'block';
    document.getElementById('design-info').innerHTML = designinfo;


    let partinfo = partsIsNotNull ? '下列括号中为拥有零件数<br>' : '';
    const amounts = document.getElementsByClassName('amount');
    const displayHaveParts = partsIsNotNull ? 'inline' : 'none';
    for (let i = 2; i < design[num].length; i++) {
        if (design[num][i] > 0) {
            const havePartNum = amounts[i - 2].textContent ? parseInt(amounts[i - 2].textContent) : 0;
            let styleColor = '';
            if (havePartNum < design[num][i]) {
                styleColor = 'red';
            } else {
                styleColor = 'green';
            }
            const p = "alert('" + parts[i - 2] + "[" + partsCh[i - 2].replace(/\(/g, '[').replace(/\)/g, ']') + "]" + "');";
            partinfo += '<div class="part-row"><div class="part-row-img" onclick="'
                + p + '"><img src="part_img/' + partsImgSrc[i - 2] + '"></div><div  class="se-amount">'
                + design[num][i] + '<span style="display:' + displayHaveParts + ';color:' + styleColor + ';">(' + havePartNum + ')</span></div></div>';
        }
    }
    document.getElementById('part-info').style.height = 'calc(80vh - 2em - ' + document.getElementById('design-info').offsetHeight + 'px';
    document.getElementById('part-info').innerHTML = partinfo;
}

/*多选计算总零件数*/
function showCompare(recommend_id) {
    //将选中的模型标记为已选中
    let modeltemp = recommendhtml[0][recommend_id].split('$');//可用模型格式(which=0)：model-id $ selected
    const selectedtext = modeltemp[1] == 1 ? '0' : '1';
    recommendhtml[0][recommend_id] = modeltemp[0] + '$' + selectedtext;
    if (selectedtext == 0) {
        document.getElementById('possible' + recommend_id).style.border = 'none';
    } else {
        document.getElementById('possible' + recommend_id).style.border = '2px cyan solid';
    }
    let multiHTML = '多选模型：<br>';
    //计算总零件数，生成缩略图
    partsCompareArr = new Array(parts.length).fill(0);
    for (let i = 0; i < recommendhtml[0].length; i++) {
        const modelArr = recommendhtml[0][i].split('$');
        if (modelArr[1] == '0') {//没有被选中，跳过
            continue;
        }

        const designTemp = design[parseInt(modelArr[0])];
        if (designTemp[0].substring(0, 2) == 'MA') {
            multiHTML += `<div class="select-thumbnail" style="display:inline-block;"><img onclick="showdesign(${parseInt(modelArr[0])},${i})" style="height:8em;width:9vw;cursor:pointer;object-fit:contain;" src="alt/${designTemp[0]}.webp"></div>`;
        } else if (designTemp[0].charAt(0) == 'M') {
            multiHTML += `<div class="select-thumbnail" style="display:inline-block;"><img onclick="showdesign(${parseInt(modelArr[0])},${i})" style="height:8em;width:9vw;cursor:pointer;object-fit:contain;" src="diy_img/${designTemp[0]}.webp"></div>`;
        } else {
            multiHTML += `<div class="select-thumbnail" style="display:inline-block;"><img onclick="showdesign(${parseInt(modelArr[0])},${i})" style="height:8em;width:9vw;cursor:pointer;object-fit:contain;" src="webimg/${designTemp[0].toUpperCase()}-brand.webp"></div>`;
        }

        for (let j = 2; j < designTemp.length; j++) {
            partsCompareArr[j - 2] += designTemp[j];
        }
    }
    document.getElementById('re-multiselect').innerHTML = multiHTML;

    //显示总零件数
    let resultHTML = '多选零件总数(括号中为拥有零件数)：<br>';
    const amounts = document.getElementsByClassName('amount');
    for (let i = 0; i < partsCompareArr.length; i++) {
        if (partsCompareArr[i] != 0) {
            const havePartNum = amounts[i].textContent ? parseInt(amounts[i].textContent) : 0;
            let styleColor = '';
            if (havePartNum < partsCompareArr[i]) {
                styleColor = 'red';
            } else {
                styleColor = 'green';
            }
            const alertFunc = "alert('" + parts[i] + "[" + partsCh[i].replace(/\(/g, '[').replace(/\)/g, ']') + "]" + "');";
            resultHTML += `<div class="part-row"><div class="part-row-img" onclick="${alertFunc}"><img src="part_img/${partsImgSrc[i]}"></div>
      <div  class="se-amount">${partsCompareArr[i]}<span style="color:${styleColor};">(${havePartNum})</span></div></div>`;
        }
    }
    const compareElm = document.getElementById('re-compare');
    compareElm.innerHTML = resultHTML;
}

/*lang:0->chinese,1->english*/
let lang = 0;
function changeLang() {
    if (lang == 0) {
        document.getElementById('la-ch').innerHTML = '.lang-ch{display:none;}';
        document.getElementById('la-en').innerHTML = '.lang-en{display:inline-block;}';
        lang = 1;
        //document.getElementById('Tab3').style.display='none';
    } else {
        document.getElementById('la-ch').innerHTML = '.lang-ch{display:inline-block;}';
        document.getElementById('la-en').innerHTML = '.lang-en{display:none;}';
        lang = 0;
        //document.getElementById('Tab3').style.display='block';
    }
}

/*save and load kits and parts amount in cookie*/
function setCookie(cname, cvalue, exdays) {
    let expires = '';
    if (exdays != 0) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        expires = ";expires=" + d.toUTCString();
    }
    document.cookie = cname + "=" + cvalue + expires + ";path=/;";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function saveParts() {
    let confirmtext;
    if (lang == 0) {
        confirmtext = '保存将覆盖原存储数据';
    } else {
        confirmtext = 'Do you want overwrite the part amount?';
    }
    if (getCookie('pA0') !== '') {
        if (confirm(confirmtext) == false) {
            return;
        }
    }
    const kitsAmount = document.getElementsByClassName('kits-amount');
    for (let i = 0; i < kitsAmount.length; i++) {
        setCookie('kA' + i, kitsAmount[i].textContent, 1000);
    }
    const partsAmount = document.getElementsByClassName('amount');
    let amount;
    for (let i = 0; i < partsAmount.length; i++) {
        amount = partsAmount[i].textContent;
        if (amount == '') {
            amount = 0;
        }
        setCookie('pA' + i, amount, 1000);
    }
}

/*load partslist from cookie*/
function loadParts() {
    if (getCookie('pA0') === '') {
        return;
    }
    let temp;
    const kitsAmount = document.getElementsByClassName('kits-amount');
    for (let i = 0; i < kitsAmount.length; i++) {
        temp = getCookie('kA' + i);
        if (temp == '') {
            temp = 0;
        }
        kitsvalue[i] = parseInt(temp);
        kitsAmount[i].textContent = temp;
        if (temp > 0) {
            kitsAmount[i].nextElementSibling.style.filter = "opacity(1)";
        } else {
            kitsAmount[i].nextElementSibling.style.filter = "opacity(0)";
        }
    }
    const partsAmount = document.getElementsByClassName('amount');
    for (let i = 0; i < partsAmount.length; i++) {
        temp = getCookie('pA' + i);
        if (temp == 0) {
            partsAmount[i].textContent = '';
        } else {
            partsAmount[i].textContent = temp;
        }
    }
}

/*export partslist to .qbl file*/
function exportParts(language) {
    const link = document.createElement("a");
    const partsA = document.getElementsByClassName("amount");
    let content = '', num = 0;
    for (let index = 0; index < partsA.length; index++) {
        if (partsA[index].textContent != '' && partsEn[index] != 'TBD') {
            if (language == 0) {/*chinese*/
                content += partsForExport[index] + partsA[index].textContent + '\r\n';
            } else if (language == 1) {/*english*/
                content += partsEn[index] + partsA[index].textContent + '\r\n';
            }
        }
    }
    let url;
    if (language == 0) {/*chinese encoding*/
        const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), content], { type: 'text/plain;charset=windows-1252' });
        url = URL.createObjectURL(blob);
    } else {
        url = 'data:text/plain;charset=utf-8,' + content;
    }

    link.setAttribute('href', url);
    link.setAttribute('download', 'myparts.qbl');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function importParts() {
    alert('施工中...敬请期待');
}

/*change tab*/
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*minimal & display qrcode*/
function minimal() {
    const temp = getCookie('qrmini');
    if (temp == '') {
        setCookie('qrmini', 1, 1000);
    }
    document.getElementById('qrcodewx').style.position = 'absolute';
    document.getElementById('qrcodewx').style.top = '-35vh';
    document.getElementById('qrcodewx').style.left = '40%';
    document.getElementById('qrcodewx').style.transform = 'scale(0.07)';
    document.getElementById('qrcodewx').style.background = 'transparent';
    setTimeout(() => {
        document.getElementById('qrcode-head').style.display = 'none';
        document.getElementById('qrcode-body').style.display = 'none';
        document.getElementById('qrcode-mini').style.display = 'inline-block';
        document.getElementById('qrcodewx').style.display = 'none';
    }, "500");
}
function maximal() {
    document.getElementById('qrcodewx').style.display = 'block';
    document.getElementById('qrcode-mini').style.display = 'none';
    document.getElementById('qrcode-head').style.display = 'block';
    document.getElementById('qrcode-body').style.display = 'block';
    document.getElementById('qrcodewx').style.background = 'white';
    document.getElementById('qrcodewx').style.top = '10vh';
    document.getElementById('qrcodewx').style.left = '10vw';
    document.getElementById('qrcodewx').style.transform = 'scale(1)';
    document.getElementById('qrcodewx').style.position = 'fixed';
}
function isWechat() {
    return /MicroMessenger/i.test(window.navigator.userAgent);
}