// Greek
// Keyboard: Greek
// Source: IE Greek
UEMKB.Greek = {
"48":"0030",
"49":"0031",
"50":"0032",
"51":"0033",
"52":"0034",
"53":"0035",
"54":"0036",
"55":"0037",
"56":"0038",
"57":"0039",
"65":"0391",
"66":"0392",
"67":"03A8",
"68":"0394",
"69":"0395",
"70":"03A6",
"71":"0393",
"72":"0397",
"73":"0399",
"74":"039E",
"75":"039A",
"76":"039B",
"77":"039C",
"78":"039D",
"79":"039F",
"80":"03A0",
"81":"003B",
"82":"03A1",
"83":"03A3",
"84":"03A4",
"85":"0398",
"86":"03A9",
"87":"03C2",
"88":"03A7",
"89":"03A5",
"90":"0396",
"186":"0384",
"187":"003D",
"188":"002C",
"189":"002D",
"190":"002E",
"191":"002F",
"192":"0060",
"219":"005B",
"220":"005C",
"221":"005D",
"222":"0027",
"226":"003C"
};
UEMKB.ix["Greek"]="4";
UEMKB.ix["Greek (220)"]="4";
UEMKB.ix["Greek (319)"]="4";
UEMKB.ix["Polytonic Greek"]="4";
UEMKB.Greekix = {
"IEGreek":"0",
"IEGreek (220)":"1",
"IEGreek (319)":"2",
"IEPolytonic Greek":"3",
"FFGreek":"4",
"FFGreek (220)":"5",
"FFGreek (319)":"6",
"FFPolytonic Greek":"7",
"OPGreek":"8",
"OPGreek (220)":"9",
"OPGreek (319)":"10",
"OPPolytonic Greek":"11"
};
UEMKB.GreekchgMap = [
// IE Greek
{},
// IE Greek (220)
{"220":"0023","221":"007D","187":"002B","222":"00A8","190":"002C","81":"037E","191":"0027","188":"03BC","219":"005D","189":"002E","192":"00BD"},
// IE Greek (319)
{"220":"00B2","187":"002B","81":"00B7","191":"0027","226":"00A7","192":"00BD"},
// IE Polytonic Greek
{"192":"007E"},
// FF Greek
{},
// FF Greek (220)
{"192":"00BD","220":"0023","221":"007D","222":"00A8","81":"037E","190":"002C","191":"0027","188":"03BC","219":"005D"},
// FF Greek (319)
{"220":"00B2","81":"00B7","191":"0027","226":"00A7","192":"00BD"},
// FF Polytonic Greek
{"192":"007E"},
// OP Greek
{"188":"003C"},
// OP Greek (220)
{"81":"037E","188":"003C","189":"00BD"},
// OP Greek (319)
{"81":"00B7","189":"00BD"},
// OP Polytonic Greek
{}
];
UEMKB.GreekremMap = [
// IE Greek
[],
// IE Greek (220)
[],
// IE Greek (319)
[],
// IE Polytonic Greek
[226],
// FF Greek
[186,187,189],
// FF Greek (220)
[186,187,189],
// FF Greek (319)
[186,187,189],
// FF Polytonic Greek
[186,187,189,226],
// OP Greek
[192,226,186,220,187,221,222,190,191,189,219],
// OP Greek (220)
[192,226,186,220,187,221,222,190,191,219],
// OP Greek (319)
[192,226,186,220,187,221,222,190,191,188,219],
// OP Polytonic Greek
[192,226,186,220,187,221,222,190,191,188,189,219]
];
UEMKB.GreekaddMap = [
// IE Greek
{},
// IE Greek (220)
{},
// IE Greek (319)
{},
// IE Polytonic Greek
{},
// FF Greek
{"59":"0384","109":"002D","61":"003D"},
// FF Greek (220)
{"109":"002E","59":"0384","61":"002B"},
// FF Greek (319)
{"59":"0384","109":"002D","61":"002B"},
// FF Polytonic Greek
{"59":"0384","109":"002D","61":"003D"},
// OP Greek
{"39":"0027","96":"0060","46":"002E","47":"002F","44":"002C","45":"002D","93":"005D","92":"005C","900":"0384","91":"005B","61":"003D"},
// OP Greek (220)
{"35":"0023","168":"00A8","39":"0027","43":"002B","46":"002C","44":"03BC","45":"002E","93":"005D","125":"007D","900":"0384"},
// OP Greek (319)
{"39":"0027","43":"002B","167":"003C","46":"002E","44":"002C","45":"002D","178":"00B2","93":"005D","8217":"2019","900":"0384","91":"005B"},
// OP Polytonic Greek
{"39":"0027","46":"002E","47":"002F","44":"002C","45":"002D","93":"005D","126":"007E","92":"005C","900":"0384","91":"005B","61":"003D"}
];
