var capital_P_dangit = {

	walk: function( node ) {

		// I stole this function from here:
		// http://is.gd/mwZp7E
		
		var child,
		    next,
		    tagname;

		if ( typeof node.tagName !== "undefined" && node.nodeName !== '#text' ) {

			tagname = node.tagName.toLowerCase();
		
			if ( tagname === 'input' || tagname === 'textarea' ) {

				return;

			}

		}


		switch ( node.nodeType ) {

			case 1:  // Element
			case 9:  // Document
			case 11: // Document fragment

				child = node.firstChild;

				while ( child ) {

					next = child.nextSibling;

					this.walk( child );

					child = next;

				}

				break;

			case 3: // Text node

				node.nodeValue = this.handleText( node.nodeValue );

				break;
		}

	},

	handleText: function( text ) {

		text = text.replace(/\bWordpress\b/g, "WordPress");
		text = text.replace(/\bwordpress\b/g, "WordPress");
		
		return text;

	}

}

capital_P_dangit.walk( document.body );
document.title = capital_P_dangit.handleText( document.title );


